let raw = $input.first().json.output
raw = raw.replace(/```json\n?/, "").replace(/\n?```/, "");

let parsed;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  throw new Error("Gagal parse JSON: " + err.message);
}

return [{ json: parsed }];
