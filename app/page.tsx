export default function Home() {
  const categories = [
    "Classic",
    "Gourmet",
    "Desserts",
    "Cookies",
    "Cupcakes",
    "Brownies",
  ];

  const products = [
    { name: "Rich Chocolate Truffle Cake", price: "$500", rating: "4.9" },
    { name: "Choco Chip Truffle Cake", price: "$509", rating: "4.8" },
    { name: "Tropical Fruit N Almond Cake", price: "$509", rating: "4.7" },
    { name: "Rich Butterscotch Crunch", price: "$399", rating: "4.6" },
    { name: "Classic Black Forest", price: "$449", rating: "4.8" },
    { name: "Belgian Fudge Slice", price: "$579", rating: "4.9" },
  ];

  const promiseStats = [
    "On-Time Delivery",
    "500+ Designs",
    "2 Cr+ Orders",
    "Baked Fresh",
  ];

  const galleryCards = [
    "Birthday Story",
    "Reveal Moment",
    "Family Smile",
    "Office Celebration",
    "Wedding Joy",
    "Weekend Surprise",
  ];

  return (
    <div className="min-h-screen bg-[#ead9bf] p-2 sm:p-3 lg:p-6">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[30px] border border-[#dbc7b6] bg-[#f6eeea] shadow-[0_20px_50px_rgba(102,33,39,0.12)]">
        <header className="grid items-center gap-4 px-4 pb-4 pt-5 lg:px-8 xl:grid-cols-[auto_minmax(320px,440px)_auto]">
          <a
            className="font-[var(--font-title)] text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-none tracking-[0.02em] text-[#ad1f2f]"
            href="#"
            aria-label="Dakingo home"
          >
            Dakingo
          </a>

          <label
            className="flex min-h-11 items-center overflow-hidden rounded-full border border-[#d8bdbe] bg-white"
            aria-label="Search products"
          >
            <span className="w-9 text-center text-sm font-bold text-[#a37b83]" aria-hidden>
              O
            </span>
            <input
              type="search"
              placeholder="Search"
              className="h-11 flex-1 border-0 bg-transparent px-1 text-[0.95rem] font-semibold text-[#57262d] outline-none placeholder:text-[#a37b83]"
            />
            <button
              type="button"
              aria-label="Submit search"
              className="h-11 min-w-14 border-l border-[#efd4d7] bg-[#ad1f2f] px-4 text-xs font-extrabold tracking-[0.04em] text-white"
            >
              Go
            </button>
          </label>

          <div className="flex items-center justify-start gap-3 xl:justify-end">
            <button
              type="button"
              className="min-h-10 rounded-full border border-[#dab9bb] bg-white px-4 text-sm font-extrabold text-[#57262d]"
              aria-label="Open cart"
            >
              Cart
            </button>
            <a href="#" className="text-sm font-bold text-[#6a4047]">
              Login / Signup
            </a>
          </div>
        </header>

        <nav
          className="flex items-center gap-4 overflow-x-auto border-y border-[#ecd6ca] bg-[#fff7f3] px-4 py-3 text-sm font-bold text-[#6a3c45] lg:px-8"
          aria-label="Main categories"
        >
          <a href="#" className="whitespace-nowrap">
            Cakes
          </a>
          <a href="#" className="whitespace-nowrap">
            Theme Cakes
          </a>
          <a href="#" className="whitespace-nowrap">
            Desserts
          </a>
          <a href="#" className="whitespace-nowrap">
            Birthday
          </a>
          <a href="#" className="whitespace-nowrap">
            Hampers
          </a>
          <a href="#" className="whitespace-nowrap">
            Anniversary
          </a>

          <details className="group relative">
            <summary className="cursor-pointer list-none whitespace-nowrap">Occasions v</summary>
            <ul className="absolute left-0 top-[calc(100%+10px)] z-10 grid min-w-40 gap-2 rounded-xl border border-[#e8ced0] bg-white p-2 shadow-[0_12px_32px_rgba(108,44,50,0.16)]">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-2 py-1 text-[#74404a] hover:bg-[#fef1f2]"
                >
                  Baby Shower
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-2 py-1 text-[#74404a] hover:bg-[#fef1f2]"
                >
                  Graduation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-2 py-1 text-[#74404a] hover:bg-[#fef1f2]"
                >
                  Corporate
                </a>
              </li>
            </ul>
          </details>

          <button
            type="button"
            className="ml-auto whitespace-nowrap rounded-full bg-gradient-to-br from-[#9d1d2c] to-[#c63d4e] px-5 py-2 text-xs font-black tracking-[0.04em] text-white"
          >
            ORDER NOW
          </button>
        </nav>

        <section
          className="grid items-center gap-4 px-4 py-8 lg:grid-cols-[240px_minmax(0,1fr)_160px] lg:px-8"
          aria-label="Hero banner"
          style={{
            background:
              "radial-gradient(circle at 84% 10%, rgba(255, 255, 255, 0.2) 0 70px, transparent 72px), radial-gradient(circle at 22% 65%, rgba(255, 255, 255, 0.14) 0 120px, transparent 122px), linear-gradient(135deg, #da5d72 0%, #bc2739 65%, #aa1126 100%)",
          }}
        >
          <div
            className="mx-auto aspect-square w-[clamp(180px,22vw,260px)] rounded-full border-[7px] border-white/95 shadow-[0_14px_26px_rgba(39,7,8,0.28)]"
            style={{
              background:
                "radial-gradient(circle at 40% 30%, #f7d2cc 0 20%, transparent 21%), radial-gradient(circle at 70% 20%, #ad3742 0 24%, transparent 26%), radial-gradient(circle at 56% 63%, #5b2b1f 0 28%, #31150e 70%, #1d0805 100%)",
            }}
            aria-hidden
          />

          <div className="text-center lg:text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#ffe7ea]">
              Freshly baked stories
            </p>
            <h1 className="font-[var(--font-title)] text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold leading-[0.95] tracking-[0.02em] text-white">
              DECADENT CHOCOLATE BLISS!
            </h1>
            <p className="mt-3 text-[clamp(1rem,1.8vw,1.55rem)] font-extrabold text-[#ffecef]">
              Satisfy Your Sweet Cravings
            </p>
            <div className="mt-5 inline-flex items-baseline gap-2 rounded-full border border-[#f7ebe8] bg-[#f3d9cf] px-4 py-2 text-[#842639]">
              <span className="text-[0.72rem] font-black uppercase tracking-[0.06em]">
                Special offer
              </span>
              <strong className="font-[var(--font-title)] text-xl font-extrabold">SAVE 20%</strong>
            </div>
          </div>

          <aside
            className="mx-auto grid grid-cols-2 gap-3 lg:grid-cols-1"
            aria-label="Highlight previews"
          >
            <div
              className="aspect-square w-28 rounded-full border-[6px] border-white/95 shadow-[0_10px_20px_rgba(39,7,8,0.28)]"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, #f7d2cc 0 20%, transparent 21%), radial-gradient(circle at 70% 20%, #ad3742 0 24%, transparent 26%), radial-gradient(circle at 56% 63%, #5b2b1f 0 28%, #31150e 70%, #1d0805 100%)",
              }}
              aria-hidden
            />
            <div
              className="aspect-square w-28 rounded-full border-[6px] border-white/95 shadow-[0_10px_20px_rgba(39,7,8,0.28)] lg:ml-4"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, #f7d2cc 0 20%, transparent 21%), radial-gradient(circle at 70% 20%, #ad3742 0 24%, transparent 26%), radial-gradient(circle at 56% 63%, #5b2b1f 0 28%, #31150e 70%, #1d0805 100%)",
              }}
              aria-hidden
            />
          </aside>
        </section>

        <main className="-mt-6 mx-3 grid gap-8 rounded-[30px] border border-[#f0ded4] bg-[#fffdfb] p-4 sm:mx-4 sm:p-6 lg:mx-6 lg:p-8">
          <section aria-label="Menu section">
            <h2 className="font-[var(--font-title)] text-[clamp(2rem,3.2vw,2.8rem)] font-extrabold leading-[0.95] text-[#ad1f2f]">
              Menu
            </h2>
            <p className="mt-2 text-base font-bold text-[#7a4b54]">What will you wish for?</p>

            <div className="mt-4 flex gap-2" aria-hidden>
              <span className="h-8 w-8 rounded-lg border border-[#edd6cd] bg-white" />
              <span className="h-8 w-8 rounded-lg border border-[#edd6cd] bg-white" />
              <span className="h-8 w-8 rounded-lg border border-[#edd6cd] bg-white" />
            </div>

            <div className="mt-4 grid grid-flow-col auto-cols-[minmax(118px,1fr)] gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Menu tabs">
              {categories.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  key={item}
                  aria-selected={index === 0}
                  className={`min-h-[78px] rounded-[18px] border bg-white px-3 text-sm font-black ${
                    index === 0
                      ? "border-[#e7bcc2] text-[#ad1f2f] shadow-[0_8px_18px_rgba(143,65,72,0.14)]"
                      : "border-[#ecd6cc] text-[#81434f]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-3 grid gap-2">
              <details open className="overflow-hidden rounded-[14px] border border-[#edd5ca] bg-white">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-extrabold text-[#7b4650]">
                  Classic Flavors -
                </summary>
                <div className="border-t border-[#f2e4dc] px-4 py-3 text-sm font-bold text-[#8b5660]">
                  Chocolate, Vanilla, Red Velvet
                </div>
              </details>
              <details className="overflow-hidden rounded-[14px] border border-[#edd5ca] bg-white">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-extrabold text-[#7b4650]">
                  Quick Delivery Filters +
                </summary>
                <div className="border-t border-[#f2e4dc] px-4 py-3 text-sm font-bold text-[#8b5660]">
                  30 min, 60 min, Same day
                </div>
              </details>
            </div>
          </section>

          <section aria-label="Bestsellers section">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-[var(--font-title)] text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[0.95] text-[#ad1f2f]">
                Bestsellers from Across the Country
              </h3>
              <button
                type="button"
                className="rounded-full bg-[#ad1f2f] px-5 py-2 text-sm font-extrabold text-white"
              >
                VIEW ALL
              </button>
            </div>

            <div className="mt-4 grid grid-flow-col auto-cols-[minmax(210px,1fr)] gap-3 overflow-x-auto pb-2" aria-label="Scrollable product cards">
              {products.map((product, index) => (
                <article
                  className="grid gap-2 rounded-[18px] border border-[#eeddd3] bg-white p-3"
                  key={`${product.name}-${index}`}
                >
                  <div
                    className="aspect-[1.34] w-full rounded-[14px]"
                    style={{
                      background:
                        "radial-gradient(circle at 20% 22%, #f7e0d6 0 16%, transparent 17%), radial-gradient(circle at 70% 30%, #c35b5f 0 14%, transparent 15%), radial-gradient(circle at 50% 60%, #774326 0 34%, #4f2416 72%, #2e110d 100%)",
                    }}
                    aria-hidden
                  />
                  <h4 className="text-[0.98rem] font-black leading-tight text-[#6f3743]">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline justify-between gap-2">
                    <strong className="text-[1.05rem] font-extrabold text-[#a72a3a]">
                      {product.price}
                    </strong>
                    <span className="text-xs font-bold text-[#a1737d]">{product.rating} stars</span>
                  </div>
                  <button
                    type="button"
                    className="ml-auto h-7 w-7 rounded-full bg-[#a91d2f] text-lg leading-none text-white"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    +
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-[1.05fr_1fr]" aria-label="Our promise section">
            <div>
              <h3 className="font-[var(--font-title)] text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[0.95] text-[#ad1f2f]">
                Our Promise
              </h3>
              <p className="mt-2 text-base font-bold text-[#7a4b54]">
                There is no secret spell, only honest work.
              </p>

              <div className="mt-4 rounded-[18px] border border-[#f0ddd2] bg-white p-4">
                <h4 className="font-[var(--font-title)] text-2xl font-extrabold text-[#8b505a]">
                  A glimpse, no secret spell, only social world!
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {promiseStats.map((stat) => (
                    <div
                      className="grid min-h-[88px] place-items-center rounded-[14px] border border-[#f2dfd6] bg-[#fff9f7] p-2 text-center"
                      key={stat}
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-[#c97c88] text-[0.62rem] font-black text-[#9f4251]" aria-hidden>
                        O
                      </span>
                      <strong className="mt-1 text-[0.78rem] font-black uppercase tracking-[0.02em] text-[#7e4b55]">
                        {stat}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 rounded-[18px] border border-[#f0ddd2] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-[var(--font-title)] text-[1.65rem] font-extrabold text-[#a72d3d]">
                    THE MAGICAL TICKET
                  </h4>
                  <p className="mt-1 text-sm font-bold text-[#82515a]">
                    Add 3 reminders in your account. Win offers worth Rs. 750
                  </p>
                </div>
                <button
                  type="button"
                  className="h-10 w-fit rounded-full bg-[#ad2030] px-4 text-xs font-black text-white"
                >
                  UNLOCK NOW
                </button>
              </div>

              <div className="mt-3 flex min-h-[70px] items-center gap-3 rounded-[18px] border border-[#f0ddd2] bg-white px-4 py-2">
                <div className="flex items-center" aria-hidden>
                  <span className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#f3c7ba] to-[#ca6872]" />
                  <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#f3c7ba] to-[#ca6872]" />
                  <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#f3c7ba] to-[#ca6872]" />
                  <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#f3c7ba] to-[#ca6872]" />
                  <span className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#f3c7ba] to-[#ca6872]" />
                </div>
                <strong className="text-base font-black text-[#7e4650]">Follow us on social!</strong>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#f0ddd2] bg-white p-3">
              <div className="grid max-h-[500px] grid-cols-1 gap-2 overflow-y-auto sm:grid-cols-2" aria-label="Customer moment gallery">
                {galleryCards.map((item, index) => (
                  <article
                    className="overflow-hidden rounded-[14px] border border-[#efd8cf] bg-white"
                    key={`${item}-${index}`}
                  >
                    <div
                      className="h-32 w-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(255, 238, 226, 0.9) 0 18%, transparent 19%), radial-gradient(circle at 70% 65%, rgba(181, 67, 72, 0.66) 0 24%, transparent 26%), linear-gradient(135deg, #ddb39f 0%, #9e4e4d 100%)",
                      }}
                      aria-hidden
                    />
                    <strong className="block p-2 text-sm font-extrabold text-[#79414a]">{item}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="px-4 pb-6 pt-6 lg:px-8" aria-label="Footer">
          <div className="rounded-[20px] bg-[#ad1f2f] px-5 py-4 text-center font-[var(--font-title)] text-[clamp(1.2rem,2.3vw,1.9rem)] font-extrabold text-white">
            Dakingo - Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(3,minmax(120px,1fr))_minmax(220px,1fr)]">
            <section className="grid content-start gap-2">
              <h5 className="font-[var(--font-title)] text-[2rem] font-extrabold text-[#ad1f2f]">Dakingo</h5>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Our Story
              </a>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Contact Us
              </a>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Media
              </a>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Careers
              </a>
            </section>

            <section className="grid content-start gap-2">
              <h6 className="text-sm font-black tracking-[0.05em] text-[#782f3b]">KNOW US</h6>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Connect Us
              </a>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Blog
              </a>
            </section>

            <section className="grid content-start gap-2">
              <h6 className="text-sm font-black tracking-[0.05em] text-[#782f3b]">NEED HELP</h6>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Cancellation & Refund
              </a>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Privacy Policy
              </a>
            </section>

            <section className="grid content-start gap-2">
              <h6 className="text-sm font-black tracking-[0.05em] text-[#782f3b]">MORE INFO</h6>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Terms And Policy
              </a>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Custom Orders
              </a>
            </section>

            <section className="grid content-start gap-2">
              <h6 className="text-sm font-black tracking-[0.05em] text-[#782f3b]">NEWSLETTER</h6>
              <label>
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="h-11 w-full rounded-full border border-[#dcbec0] bg-white px-4 text-sm font-semibold text-[#57262d] outline-none placeholder:text-[#a37b83]"
                />
              </label>
              <button
                type="button"
                className="h-10 w-fit rounded-full bg-[#ab1e2e] px-5 text-xs font-black text-white"
              >
                SUBSCRIBE
              </button>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}
