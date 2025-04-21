use wasm_bindgen::prelude::*;

#[wasm_bindgen]
/// add two numbers together
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
