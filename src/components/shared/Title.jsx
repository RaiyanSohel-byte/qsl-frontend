const Title = ({ normalText, highlightText }) => {
  return (
    <h2 className="font-semibold text-[32px] lg:text-5xl">
      {normalText} <span className="text-accent">{highlightText}</span>
    </h2>
  );
};

export default Title;
