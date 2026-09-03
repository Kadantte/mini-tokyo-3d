#include <project_vertex>

// Per-instance depth bias, scaled by w so the resulting NDC offset stays
// constant regardless of distance from the camera. Breaks ties
// deterministically when two instances land at nearly the same depth (e.g.
// a train stopped right behind another).
//
// 4093 is a prime close to the traffic layer's total instance pool size
// (7700, see MAX_UG_CARS/MAX_OG_CARS/MAX_AIRCRAFTS/MAX_BUSES in
// traffic-layer.js), keeping collisions between coincident instances rare.
// 1e-6 keeps the total span (~4e-3 at most) comfortably above the ~6e-8
// depth-buffer quantization floor per step.
gl_Position.z -= float( instanceID % 4093 ) * 1e-6 * gl_Position.w;
