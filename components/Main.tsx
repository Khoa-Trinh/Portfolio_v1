export default function Main() {
  return (
    <div className="mx-[5.5rem]">
      <div className="headings">About me</div>
      <div className="descriptions mt-[-1.25rem]">
        A normal kid interested in playing games but one day he found that
        making games are better
      </div>

      <div className="flex flex-wrap mt-[1rem] gap-x-[1.25rem] gap-y-[1.6875rem] max-w-[48.4375rem]">
        {_.map(() => (
          <BetterCard />
        ))}
      </div>
    </div>
  );
}
