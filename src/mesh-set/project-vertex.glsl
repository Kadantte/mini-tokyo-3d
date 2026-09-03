#include <project_vertex>

// Per-instance depth bias, scaled by w so the resulting NDC offset stays
// constant regardless of distance from the camera. Breaks ties
// deterministically when two instances land at nearly the same depth (e.g.
// a train stopped right behind another).
//
// A constant NDC offset is a growing real-world distance the farther the
// camera's far plane pushes depth precision (this map's far plane can be
// tens of km out), so the total span across all instances has to stay far
// below any real gap between merely-nearby (not coincident) vehicles - a
// small modulus keeps that span tiny, at the cost of occasionally colliding
// on genuinely coincident instances (rare, and just a visual tie, not the
// interference a too-large span causes between distinct vehicles).
gl_Position.z -= float( instanceID % 256 ) * 2e-7 * gl_Position.w;
