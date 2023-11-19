const content = [
  {
    chapter: 1,
    title: "The Nature of the Way",
    original: `
      道可道，非常道。
      名可名，非常名。
      无名天地之始；有名万物之母。
      故常无欲，以观其妙;
      常有欲，以观其徼。
      此两者，同出而异名, 同谓之玄。
      玄之又玄, 衆妙之门。
    `,
    english: `
      Where the Way is often sought,
      The truest Way cannot be caught.

      Names we give, but they won't last long,
      Yet naming is how things belong.
      From nothingness, the world did start,
      Naming gives each thing its part.

      Desireless, we see wonder's core,
      Otherwise, we always seek more.
      Two paths, different names they bear,
      Both mysterious, beyond compare.
    `,
  },
  {
    chapter: 2,
    title: "The Nature of the Way",
    original: `
      道可道，非常道。
      名可名，非常名。
      无名天地之始；有名万物之母。
      故常无欲，以观其妙;
      常有欲，以观其徼。
      此两者，同出而异名, 同谓之玄。
      玄之又玄, 衆妙之门。
    `,
    english: `
      Where the Way is often sought,
      The truest Way cannot be caught.

      Names we give, but they won't last long,
      Yet naming is how things belong.
      From nothingness, the world did start,
      Naming gives each thing its part.

      Desireless, we see wonder's core,
      Otherwise, we always seek more.
      Two paths, different names they bear,
      Both mysterious, beyond compare.
    `,
  },
] as Content[];

interface Content {
  chapter: number;
  title: string;
  english: string;
  original: string;
  explanation?: string;
}

export default content;
