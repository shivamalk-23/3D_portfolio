export const FvertexShader = `
  varying vec2 UV;
  void main() {
    UV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const FfragmentShader = `
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

void main() {
    vec2 displ = texture(displ_tex, fract(UV - TIME / 8.0)).xy;
    displ = ((displ * 5.0)+ 1.0) * displ_amount;
    float noise = texture(noise_tex, fract(vec2(UV.y, UV.x / 3.0 + TIME / 4.0) - displ)).x;
    
    noise = floor(noise * 5.0) / 4.0;
    vec4 col = mix(mix(top_dark_color, bot_dark_color, UV.y), mix(top_light_color, bot_light_color, UV.y), noise);

    // Add foam effect at the bottom of the plane
    float foam_factor = smoothstep(0.2, bottom_foam_threshold, noise * (1.0 - UV.y));
    vec4 foam_color = vec4(1.0, 1.0, 1.0, 1.0); // White foam
    col = mix(col, foam_color, foam_factor);


    gl_FragColor = vec4(col.xyz, 1.0);
}`;

