function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div>
        <h2 className="font-medium">search</h2>
      </div>
    </>
  );
}
