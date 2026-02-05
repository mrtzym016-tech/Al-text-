function generate() {
  const tool = document.getElementById("tool").value;
  const topic = document.getElementById("topic").value;
  const tone = document.getElementById("tone").value;
  const length = document.getElementById("length").value;
  const dialect = document.getElementById("dialect").value;

  if (!topic) {
    alert("اكتب العنوان أولاً");
    return;
  }

  import(`./api/${tool}.js`).then(module => {
    const text = module.generate(topic, tone, length, dialect);
    document.getElementById("result").textContent = text;
  });
}
