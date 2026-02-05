export function generate(topic, tone, length, dialect) {

  const dialects = {
    fusha: {
      intro: [
        `دعني أشاركك فكرة مهمة حول ${topic}`,
        `الكثير يتحدث عن ${topic} لكن القليل يفهمه`
      ],
      end: [
        `التفكير الواعي هو البداية.`,
        `القرار بيدك الآن.`
      ]
    },
    iraqi: {
      intro: [
        `خليني أحچي وياك عن ${topic}`,
        `هواي ناس تفهم ${topic} غلط`
      ],
      end: [
        `السالفة مو صدفة.`,
        `إنت شتختار؟`
      ]
    },
    saudi: {
      intro: [
        `خلنا نكون صريحين عن ${topic}`,
        `موضوع ${topic} ناس كثير تغفل عنه`
      ],
      end: [
        `القرار لك.`,
        `فكّر فيها زين.`
      ]
    },
    egypt: {
      intro: [
        `خليني أقولك حاجة عن ${topic}`,
        `ناس كتير فاكرة ${topic} سهل`
      ],
      end: [
        `الموضوع محتاج وعي.`,
        `إنت تختار.`
      ]
    },
    maghreb: {
      intro: [
        `خليني نهدر معاك على ${topic}`,
        `بزاف الناس فاهمين ${topic} غلط`
      ],
      end: [
        `الفكرة واضحة.`,
        `الاختيار عندك.`
      ]
    }
  };

  const d = dialects[dialect] || dialects.fusha;

  const body = `${topic} مو مجرد فكرة، هو أسلوب تفكير يغيّر نظرتك للأشياء.`;

  let text = `${pick(d.intro)}\n\n${body}\n\n${pick(d.end)}`;

  if (length === "long") {
    text += `\n\nواللي يفهم ${topic} صح، دايم يكون خطوة قدّام.`;
  }

  return text;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
