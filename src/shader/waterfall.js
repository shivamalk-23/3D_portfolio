/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
export const vertexShader = `
  varying vec2 UV;
  void main() {
    UV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
uniform sampler2D noise_tex;
uniform sampler2D displ_tex;
uniform vec4 top_light_color;
uniform vec4 top_dark_color;
uniform vec4 bot_light_color;
uniform vec4 bot_dark_color;
uniform float displ_amount;
uniform float bottom_foam_threshold;
uniform float speed;
uniform float TIME;
varying vec2 UV;

float foam_range = 0.3;
float foam_amount = 0.092;

vec2 add_water_foam_line(vec2 uv) {
    vec2 displ = texture(noise_tex, fract(uv+0.65 - mod(TIME, 8.0) / 8.0)).xy; // Loop the foam movement
    return ((displ * 2.5) - 1.5) * foam_amount;    
}


void main() {
    vec2 displ = texture(displ_tex, fract(UV + TIME / 8.0)).xy;
    displ = ((displ * 5.0) - 2.0) * displ_amount;
    float noise = texture(noise_tex, fract(vec2(UV.x, UV.y / 3.0 - TIME / 4.0) - displ)).x;
    vec2 foam_line = add_water_foam_line(UV);
    vec2 foam_line_dark = add_water_foam_line(UV);

    noise = floor(noise * 4.0) / 4.0;
    vec4 col = mix(mix(top_dark_color, bot_dark_color, UV.y), mix(top_light_color, bot_light_color, UV.y), noise);
   
    // Add foam effect at the bottom of the plane
    
    vec4 foam_color = vec4(1.0, 1.0, 1.0, 1.0); // White foam
    vec4 dark_foam_color = vec4(0.70, 0.70, 1.0, 1.0); // White foam


    col = (mix(col, dark_foam_color, step(UV.y - foam_line_dark.y, 0.2)));//adds second layer to the foam foam looping
    col = (mix(col, foam_color, step(UV.y - foam_line.y, 0.15)));//adds light layer of foam

   col = (mix(col, foam_color, step(-UV.y - foam_line_dark.y, -0.8)));//adds second layer to the foam foam looping
   col = (mix(col, dark_foam_color, step(-UV.y - foam_line.y, -0.9)));//adds second layer to the foam foam looping
    

    gl_FragColor = vec4(col.xyz, 1.0);
}
`;


