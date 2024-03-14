export const promptGenerateCarousel = `

Act as a professional copy writting machine and create a carousel that summarizes the following Linkedin post:

Given this text:

"
{post}
"
Use the copy of that text to create an array of slides that tells a summarize version of that text using the same tone and style.

{format_instructions}

Please remember:
- The array should work fine as a standalone carousel, without the need of the original text.
- You should create as many slides as necesary to summarize the original text.


Here you have an example of each type of slide:

Cover: always add a cover slide at the beginning of the array.
    {{
        "title": "Comercio Electrónico y Sostenibilidad",
        "tagline": "No es solo de compras y ventas",
        "design": "Cover"
    }},

BigNumberSlide: use it when the main element of the text is a list and you want to use one slide per item of the list. The title must be maximum 15 characters!
    {{
      "title": "Adáptate", // maximum 15 characters
      "bigCharacter": "1",
      "tagline": "Lo primero es estar al día de las tendencias de tu sector, ¿estás al tanto?",
      "design": "BigNumberSlide"
    }},



ListSlide: use it when the text has a list but the list is not the only part of the text, so you want to use only one slide for the list. IMPORTANT!!!! the total list (the sum of all the items text) has more than 30 characters, split it into several slides.
    {{
        "title": "Enfoque tradicional",
        "paragraphs": [
          "Enfocarse principalmente en ventas físicas",
          "Un solo canal de ventas online",
          "Marketing tradicional, poco uso de redes sociales",
        ],
        "design": "ListSlide"
      }},


TextOnlySlide: Use it when you have a chunk of paragraph that is important. But remember, only one paragraph per slide and a concise one.

      {{
        "title": "¡Lo nuevo >>> Lo viejo!",
        "paragraphs": [
          "Es momento de adaptarse y aprovechar estas tendencias para mantenerse competitivo"],
        "design": "TextOnlySlide"
      }}, 
    
CallToAction: always add a call to action slide at the end of the array.
      {{
        "title": "¿Y tú qué opinas?",
        "paragraphs": ["Cuéntamelo en comentarios y comparte con tus amigos si te gustó este contenido. Sígueme para más contenido."],
        "tagline": "Sígueme para más contenido",
        "design": "CallToAction"
      }}


Now build the array.

const array =

`;

// Create the array of slides that meet that structure. Only output the array, not intro, no outro, no logs. VERY IMPORTANT: Don't go above the allowed length on ANY of the slide contents.

// It's very important for me that you follow the format of each slide:
// - CoverSlide has: title, tagline. It does NOT have paragraphs. Always start with a cover slide.
// - OnlyTextSlide has: title, paragraphs (only ONE paragraph in the array). It does NOT have tagline.
// - BigNumberSlide has: title, bigCharacter, tagline. It does NOT have paragraphs.
// - ListSlide has: title, paragraphs. It does NOT have tagline.
// - CallToAction has: title, paragraphs (only ONE paragraph in the array), and tagline. Always finish with a call to action.

// export const promptGenerateCarousel = `

// Given this text:

// "
// {post}
// "
// Use the copy of that text to create an array of slides with the following structure:

// {format_instructions}

// Create the array of slides that meet that structure. Only output the array, not intro, no outro, no logs. VERY IMPORTANT: Don't go above the allowed length on ANY of the slide contents.

// const array =

// `;
