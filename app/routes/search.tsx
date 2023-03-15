function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div>
        <h2 className="font-medium">Search</h2>
      </div>
    </>
  );
}
