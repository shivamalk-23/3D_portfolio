export const GvertexShader=`

varying vec2 UV;


void main(){
UV=uv;
 gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`


export const GfragmentShader = `
  precision mediump float; // Set precision for fragment shader

  varying vec2 UV;          // UV coordinates passed from vertex shader
  uniform float timescale;  // Time uniform for animation

  // Constants
  const int OCTAVE = 6;
  const float mulscale = 5.0;
  const float height = 0.6;
  const float tide = 0.1;
  const float foamthickness = 0.1;
  const vec4 FOAM_COL = vec4(0.9, 1, 1, 1.0);
  const vec4 WATER_COL = vec4(0.4, 0.6, 1, 1.0);
  const vec4 WATER2_COL = vec4(0.3, 0.5, 1, 1.0);

  // Random function
  float rand(vec2 inputs) {
    return fract(sin(dot(inputs, vec2(23.53, 44.0))) * 42350.45);
  }

  // Perlin noise function
  float perlin(vec2 inputs) {
    vec2 i = floor(inputs);
    vec2 f = fract(inputs);
    vec2 coord = smoothstep(0.0, 1.0, f);

    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    return mix(mix(a, b, coord.x), mix(c, d, coord.x), coord.y);
  }

  // Fractal Brownian Motion (FBM)
  float fbm(vec2 inputs) {
    float value = 0.0;
    float scale = 0.5;

    for (int i = 0; i < OCTAVE; i++) {
      value += perlin(inputs) * scale;
      inputs *= 2.0;
      scale *= 0.5;
    }
    return value;
  }

  void main() {
    float newtime = timescale;
    float fbmval = fbm(vec2(
      UV.x * mulscale - 0.32 * sin(0.6 * newtime) + 0.75 * newtime,
      +2.0 * newtime - UV.y * mulscale - 0.1 * cos(-0.68 * newtime)
    ));

    float fbmvalshadow = fbm(vec2(
      UV.x * mulscale + 0.32 * sin(-0.6 * newtime - 25.0 * UV.y) + 0.75 * newtime + 3.0,
      +2.0 * newtime - UV.y * mulscale - 0.53 * cos(1.2 * newtime) - 7.0 + 0.1 * sin(0.43 * newtime)
    ));

    float myheight = height + tide * sin(newtime + 5.0 * UV.x - 8.0 * UV.y);
    float shadowheight = height + tide * 1.3 * cos(newtime + 2.0 * UV.x - 2.0 * UV.y);

    float withinFoam = step(myheight, fbmval) * step(fbmval, myheight + foamthickness);
    float shadow = (1.0 - withinFoam) * step(shadowheight, fbmvalshadow) * step(fbmvalshadow, shadowheight + foamthickness * 0.7);

    vec4 color = withinFoam * FOAM_COL +
                 shadow * WATER2_COL +
                 ((1.0 - withinFoam) * (1.0 - shadow)) * WATER_COL;

    gl_FragColor = color; // Output the final color
  }
`;

