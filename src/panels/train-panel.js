import {getTimeString, lerp} from '../helpers/helpers';
import Panel from './panel';

export default class extends Panel {

    constructor(options) {
        super(Object.assign({className: 'train-panel'}, options));
    }

    addTo(map) {
        const me = this,
            timetables = [],
            sections = [],
            stationHTML = [],
            offsets = [],
            train = me._options.object,
            {r: railway, timetable} = train,
            color = (train.v || railway).color,
            delay = train.delay || 0;
        let currSection;

        for (let curr = timetable; curr; curr = curr.pt && curr.pt[0]) {
            timetables.unshift(curr);
        }
        for (let curr = timetable.nt && timetable.nt[0]; curr; curr = curr.nt && curr.nt[0]) {
            timetables.push(curr);
        }
        for (const curr of timetables) {
            const section = {},
                stations = curr.stations;

            section.start = Math.max(stationHTML.length - 1, 0);
            for (let i = 0, ilen = stations.length; i < ilen; i++) {
                if (i > 0 || !curr.pt) {
                    const arrivalTime = curr.arrivalTimes[i],
                        departureTime = curr.departureTimes[i];

                    stationHTML.push([
                        '<div class="station-row">',
                        `<div class="station-title-box">${map.getLocalizedStationTitle(stations[i])}</div>`,
                        '<div class="station-time-box',
                        delay >= 60000 ? ' desc-caution' : '',
                        '">',
                        arrivalTime !== undefined ? getTimeString(arrivalTime + delay) : '',
                        arrivalTime !== undefined && departureTime !== undefined ? '<br>' : '',
                        departureTime !== undefined ? getTimeString(departureTime + delay) : '',
                        '</div></div>'
                    ].join(''));
                }
            }
            section.end = stationHTML.length - 1;
            section.color = curr.r.color;
            sections.push(section);
            if (curr === timetable) {
                currSection = section;
            }
        }

        super.addTo(map)
            .setTitle([
                '<div class="desc-header">',
                Array.isArray(color) ? [
                    '<div>',
                    ...color.slice(0, 3).map(c => `<div class="line-strip-long" style="background-color: ${c};"></div>`),
                    '</div>'
                ].join('') : `<div style="background-color: ${color};"></div>`,
                '<div><div class="desc-first-row">',
                map.getLocalizedTrainNameOrRailwayTitle(train.nm, railway),
                '</div><div class="desc-second-row">',
                `<span class="train-type-label">${map.getLocalizedTrainTypeTitle(train.y)}</span> `,
                map.getLocalizedDestinationTitle(train.ds, train.d),
                '</div></div></div>'
            ].join(''))
            .setHTML([
                '<div id="timetable-content">',
                ...stationHTML,
                '</div>',
                '<svg id="railway-mark"></svg>',
                '<svg id="train-mark"></svg>'
            ].join(''));

        const container = me._container,
            bodyElement = container.querySelector('#panel-body');

        for (const child of container.querySelector('#timetable-content').children) {
            offsets.push(child.offsetTop + child.getBoundingClientRect().height / 2);
        }
        container.querySelector('#railway-mark').innerHTML = sections.map(({color, start, end}) =>
            `<line stroke="${color}" stroke-width="10" x1="12" y1="${offsets[start]}" x2="12" y2="${offsets[end]}" stroke-linecap="round" />`
        ).concat(offsets.map(offset =>
            `<circle cx="12" cy="${offset}" r="3" fill="#ffffff" />`
        )).join('');

        const timetableOffsets = offsets.slice(currSection.start, currSection.end + 1);

        (function repeat() {
            const height = bodyElement.getBoundingClientRect().height,
                index = train.timetableIndex,
                curr = timetableOffsets[index],
                next = train.arrivalStation ? timetableOffsets[index + 1] : curr,
                y = lerp(curr, next, train._t),
                p = performance.now() % 1500 / 1500;

            container.querySelector('#train-mark').innerHTML =
                `<circle cx="22" cy="${y}" r="${7 + p * 15}" fill="#ffffff" opacity="${1 - p}" />` +
                `<circle cx="22" cy="${y}" r="7" fill="#ffffff" />`;
            if (me._scrollTop === undefined || me._scrollTop === bodyElement.scrollTop) {
                me._scrollTop = bodyElement.scrollTop = Math.round(y - height / 2 + 4);
            }
            if (me._container) {
                requestAnimationFrame(repeat);
            }
        })();

        return me;
    }

    reset() {
        delete this._scrollTop;
    }

}
