extern crate console_error_panic_hook;
use std::panic;
use wasm_bindgen::prelude::*;

// This function will be executed on wasm module instantiation during SSR
// and again on client side.
#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    // setup better panic logging
    panic::set_hook(Box::new(console_error_panic_hook::hook));

    Ok(())
}

#[wasm_bindgen(js_name = addOne)]
pub fn add_one(x: u32) -> u32 {
    if x == 69 {
        panic!()
    }
    x + 1
}
