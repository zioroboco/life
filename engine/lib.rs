use wasm_bindgen::prelude::*;
use web_sys::console;

const LIFE: &str = "🦾";

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
  #[cfg(debug_assertions)]
  console_error_panic_hook::set_once();

  console::log_1(&JsValue::from_str(LIFE));

  Ok(())
}

#[wasm_bindgen]
pub fn message() -> JsValue {
  JsValue::from_str(LIFE)
}
