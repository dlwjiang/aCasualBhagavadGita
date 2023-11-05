"use client";

const ChapterSelect = ({ content }: any) => {
  const handleSelect = (e: any) => {
    window.location.hash = e.target.value;
  };
  return (
    <select
      name="Chapter"
      id="chapter-select"
      className="w-48 shadow rounded bg-amber-200 text-amber-800"
      onChange={handleSelect}
      value=""
    >
      <option value="" disabled>
        Select a Chapter
      </option>
      {content.map((e: any, i: number) => (
        <option value={e.title} key={e.title}>
          {i + 1}: {e.title}
        </option>
      ))}
    </select>
  );
};

export default ChapterSelect;
