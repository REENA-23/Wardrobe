import CproductCard from "./CproductCard";

export default function TrendingItems() {
  return (
    <section className="py-12">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-normal mb-10">
          <span className="text-orange-500">Trending</span> Items
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5   

            [@media(min-width:1280px)_and_(max-width:1366px)]:grid-cols-4

            gap-y-12
            gap-x-6
            md:gap-x-10
            lg:gap-x-14
            xl:gap-x-10

            justify-items-center
          "
        >
          {Array.from({ length: 15 }).map((_, index) => (
            <CproductCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
