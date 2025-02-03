export const vertexShader = `
  varying vec2 UV;
  void main() {
    UV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
uniform float TIME;
 vec4 water_color=vec4(0.2,0.5,1.0,1.0);
 float color_intensity= 1.0;
float color_saturation = 0.0;
 float stylize_amount = 1.0;
 float stretch_y= 4.0;
 float water_speed = 3.0;

 vec4 foam_color=vec4(1.0);
 float foam_range = 0.9;
 float foam_amount= 0.02;

float foam_edge_scale; // default value 0.6
 float foam_near; // default value 0.2
float foam_far; // default value 500

uniform sampler2D water_layer1;
uniform sampler2D water_layer2;
uniform sampler2D foam_map;
uniform sampler2D depth_texture; // Depth texture for foam edge detection

float animate_waterfall(vec2 uv)
{
    float water_tex1 = texture(water_layer1, vec2(uv.x, uv.y / stretch_y - TIME * 0.08 * water_speed)).r;
    float water_tex2 = texture(water_layer2, vec2(uv.x, uv.y / stretch_y - TIME * 0.05 * water_speed)).r;
    return (water_tex1 + water_tex2) - 1.0;
}

float stylize_water(float val)
{
    val = val * stylize_amount;
    if(val < -0.0 && val >= -0.2) return -0.01;
    if(val < -0.2 && val >= -0.35) return -0.07;
    if(val < -0.35 && val >= -1.0) return -0.12;
    if(val > 0.0 && val <= 0.15) return 0.2;
    if(val > 0.15 && val <= 0.35) return 0.3;
    if(val > 0.35 && val <= 0.5) return 0.5;
    if(val > 0.5 && val <= 1.0) return 0.8;
    return 1.0;
}

vec2 add_water_foam_line(vec2 uv) {
    vec2 displ = texture(water_layer2, uv - TIME / 8.0).rg;
    return ((displ * 2.0) - 1.0) * foam_amount;
}

float linearize(float depth, float z_near, float z_far) {
    // Convert the exponential depth to a linear value    
    depth = 2.0 * depth - 1.0;
    return z_near * z_far / (z_far + depth * (z_near - z_far));
}

float foam_edge(sampler2D depth_texture, float time, vec2 screen_uv, float fragcoord_z) {
    float z_depth = linearize(texture(depth_texture, screen_uv).r, foam_near, foam_far);
    float z_pos = linearize(fragcoord_z, foam_near, foam_far);
    return z_depth - z_pos;
}

float animate_foam(vec2 uv, float time) {
    vec2 displ = texture(foam_map, vec2(uv.x, uv.y - TIME * 0.04 * water_speed)).gb;
    // Convert the displacement to value range -1 and 1
    displ = ((displ * 2.0) - 1.0) * 0.5;
    return displ.x * 1.5;
}
vec2 resolution = vec2 (1.0);
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy; // Assuming 'resolution' is a uniform vec2 for screen resolution
    float animated_water = animate_waterfall(uv);
    float stylized = stylize_water(animated_water);
    vec2 foam_line = add_water_foam_line(uv);
    vec4 color = vec4(stylized, stylized, stylized, 1.0);

    // Foam / Shoreline
    float foam = foam_edge(depth_texture, TIME, uv, gl_FragCoord.z);
    float foam_anim = animate_foam(uv, TIME);
    foam += foam_anim;
    color = mix(foam_color * 5.0, color, step(foam_edge_scale, foam));

    color = mix(foam_color * 4.0, color, step(uv.y - foam_line.y, foam_range));

    if(uv.x <= 0.01 || uv.x > 0.99) {
        color += vec4(1, 1, 1, 1) * 0.5;
    }

    // Assuming you have a screen texture
    vec4 screen_tex = texture(water_layer2, uv);
    gl_FragColor = vec4(color.rgb + mix(screen_tex.rgb, water_color.rgb * color_intensity, water_color.a), 1.0);
    gl_FragColor.rgb -= vec3(color_saturation, color_saturation, color_saturation);
}
`;

 water_layer1: { value: water_layer1 },
          water_layer2: { value: water_layer2 },
          foam_map:{value:water_layer1},
          depth_texture:{value:water_layer2},
          top_light_color: { value: new THREE.Vector4(	0.5	,1.00	,0.95, 0.8) },
          top_dark_color: { value: new THREE.Vector4(0.2, 0.4, 1.0, 1.0) },
          bot_light_color: { value: new THREE.Vector4(0.2, 0.8, 0.988, 1.0) }, 
          bot_dark_color: { value: new THREE.Vector4(0.2, 0.5, 1, 1) },
          displ_amount: { value: 0.02 },
          bottom_foam_threshold: { value: 0.48 },
          speed: { value: 0.1 },
          TIME: { value: 0},