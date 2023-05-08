import { useMatches } from "@remix-run/react";

export default function Menu() {
  const [truck, menu] = useMatches().find(
    (m) => m.id === "routes/__app/$truck"
  )?.data;

  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Menu</h3>
        <div className="mt-1 max-w-2xl text-sm text-gray-800">
          Menu prices and availability subject to change and this website may
          not reflect exactly what is available on any given day.
        </div>
        {truck.menuAdvisory && (
          <div className="mt-1 max-w-2xl text-center text-xs text-gray-500">
            <p>CONSUMER ADVISORY</p> *Consuming raw or undercooked meats,
            poultry, seafood, shellfish, or eggs may increase your risk of
            foodborne illness, especially if you have certain medical
            conditions.
          </div>
        )}
      </div>
      <div className="w-full px-4 pb-5 sm:px-0">
        {menu.map(
          (section: {
            title: string;
            description: string | null | undefined;
            items: any[];
          }) => (
            <div key={section.title}>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white text-sm uppercase px-2 font-medium text-gray-900">
                    {section.title}
                  </span>
                </div>
              </div>
              {section.description && (
                <div className="py-3 text-center italic sm:px-6 text-sm text-gray-500">
                  {section.description}
                </div>
              )}
              <dl className="">
                {section.items.map((item) => (
                  <div key={item.id} className="py-3 sm:px-6">
                    <dt className="text-sm font-medium">{item.name}</dt>
                    {item.multiple ? (
                      <dd className="text-sm text-gray-500">
                        {item.price.map((priceItem) => (
                          <div key={priceItem.name} className="mt-1">
                            <span className="text-gray-900">
                              {priceItem.price}{" "}
                            </span>
                            {priceItem.name}
                          </div>
                        ))}
                      </dd>
                    ) : (
                      <dd className="text-sm text-gray-900 mt-1">
                        {item.price}
                      </dd>
                    )}
                    {item.extras && (
                      <dd className="text-sm text-gray-500">
                        {item.extras.map((extra) => (
                          <div key={extra.name} className="mt-1">
                            <span className="text-gray-900">
                              {extra.price}{" "}
                            </span>
                            {extra.name}
                          </div>
                        ))}
                      </dd>
                    )}
                    <dd className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )
        )}
      </div>
    </>
  );
}
