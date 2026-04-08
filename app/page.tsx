import Image from "next/image";
import {
  Calendar,
  CakeSlice,
  CircleHelp,
  Cookie,
  Gift,
  Heart,
  Palette,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  StarHalf,
  Ticket,
  Truck,
  Users,
} from "lucide-react";

export default function Home() {
  const navItems = [
    "Cakes",
    "Theme Cakes",
    "Desserts",
    "Birthday",
    "Hampers",
    "Anniversary",
  ];

  const categories = [
    { name: "Classic", icon: CakeSlice },
    { name: "Gourmet", icon: Sparkles },
    { name: "Desserts", icon: Gift },
    { name: "Cookies", icon: Cookie },
  ];

  const quickPills = [Gift, Calendar, Ticket];

  const products = [
    {
      name: "Rich Chocolate Truffle Cake",
      price: "$500",
      rating: 4.5,
      reviews: 500,
      image: "/images/product-truffle.jpg",
    },
    {
      name: "Choco Chip Truffle Cake",
      price: "$509",
      rating: 4.0,
      reviews: 360,
      image: "/images/product-chip.jpg",
    },
    {
      name: "Tropical Fruit N Almond Cake",
      price: "$509",
      rating: 3.5,
      reviews: 308,
      image: "/images/product-fruit.jpg",
    },
    {
      name: "Rich Butterscotch Crunch",
      price: "$399",
      rating: 4.0,
      reviews: 308,
      image: "/images/product-butterscotch.jpg",
    },
  ];

  const promiseStats = [
    { label: "On-Time Delivery", icon: Truck },
    { label: "500+ Designs", icon: Palette },
    { label: "2 Cr+ Orders", icon: Users },
    { label: "Baked Fresh", icon: ShieldCheck },
  ];

  const galleryCards = [
    { title: "Birthday Story", image: "/images/gallery-birthday.jpg" },
    { title: "Reveal Moment", image: "/images/gallery-reveal.jpg" },
    { title: "Family Smile", image: "/images/gallery-family.jpg" },
    { title: "Office Celebration", image: "/images/gallery-office.jpg" },
    { title: "Wedding Joy", image: "/images/gallery-wedding.jpg" },
    { title: "Weekend Surprise", image: "/images/gallery-weekend.jpg" },
  ];

  const socialPeople = [
    "/images/persona-1.jpg",
    "/images/persona-2.jpg",
    "/images/persona-3.jpg",
    "/images/persona-4.jpg",
    "/images/persona-5.jpg",
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let index = 0; index < fullStars; index += 1) {
      stars.push(
        <Star
          key={`full-${index}`}
          className="h-3.5 w-3.5 fill-[#e8b322] text-[#e8b322] transition-transform group-hover:scale-110"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="h-3.5 w-3.5 fill-[#e8b322] text-[#e8b322] transition-transform group-hover:scale-110"
        />,
      );
    }

    for (let index = 0; index < emptyStars; index += 1) {
      stars.push(
        <Star
          key={`empty-${index}`}
          className="h-3.5 w-3.5 text-[#ddc5be] transition-transform group-hover:scale-110"
        />,
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-[#FEF9F5] p-2 sm:p-3 lg:p-6">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[30px] border border-[#e6d7ce] bg-[#FEF9F5] shadow-[0_20px_50px_rgba(102,33,39,0.09)]">
        <header className="flex flex-wrap items-center gap-3 px-4 pb-4 pt-5 lg:px-8">
          <a
            className="font-[var(--font-title)] text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-none tracking-[0.02em] text-[#ad1f2f]"
            href="#"
            aria-label="Dakingo home"
          >
            Dakingo
          </a>

          <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
            <label
              className="order-1 flex min-h-11 min-w-[250px] items-center overflow-hidden rounded-full border border-[#d8bdbe] bg-white"
              aria-label="Search products"
            >
              <span className="grid w-9 place-items-center text-[#a37b83]" aria-hidden>
                <Search className="h-4 w-4" />
              </span>
              <input
                type="search"
                placeholder="Search"
                className="h-11 flex-1 border-0 bg-transparent px-1 text-[0.95rem] font-semibold text-[#57262d] outline-none placeholder:text-[#a37b83]"
              />
              <button
                type="button"
                aria-label="Submit search"
                className="h-11 min-w-12 border-l border-[#efd4d7] bg-[#ad1f2f] px-3 text-xs font-extrabold tracking-[0.04em] text-white"
              >
                Go
              </button>
            </label>

            <button
              type="button"
              className="order-2 grid h-10 w-10 place-items-center rounded-full border border-[#dab9bb] bg-white text-[#57262d]"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-4.5 w-4.5" />
            </button>

            <a href="#" className="order-3 text-sm font-bold text-[#6a4047]">
              Login / Signup
            </a>
          </div>
        </header>

        <nav className="border-y border-[#ecd6ca] bg-[#fff7f3]" aria-label="Main categories">
          <div className="grid items-center gap-x-2 gap-y-3 px-4 py-3 text-[13px] font-semibold text-[#7A2D38] sm:grid-cols-4 lg:grid-cols-[repeat(7,minmax(0,1fr))_auto] lg:px-8">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-center">
                {item}
              </a>
            ))}

            <details className="group relative justify-self-center">
              <summary className="cursor-pointer list-none whitespace-nowrap text-center">Occasions v</summary>
              <ul className="absolute left-1/2 top-[calc(100%+10px)] z-10 grid min-w-40 -translate-x-1/2 gap-2 rounded-xl border border-[#e8ced0] bg-white p-2 shadow-[0_12px_32px_rgba(108,44,50,0.16)]">
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
              className="justify-self-center whitespace-nowrap rounded-full bg-gradient-to-br from-[#9d1d2c] to-[#c63d4e] px-5 py-2 text-xs font-black tracking-[0.04em] text-white lg:justify-self-end"
            >
              ORDER NOW
            </button>
          </div>
        </nav>

        <section
          className="grid items-center gap-4 px-4 py-8 lg:grid-cols-[240px_minmax(0,1fr)_160px] lg:px-8"
          aria-label="Hero banner"
          style={{
            background:
              "radial-gradient(circle at 84% 10%, rgba(255, 255, 255, 0.2) 0 70px, transparent 72px), radial-gradient(circle at 22% 65%, rgba(255, 255, 255, 0.14) 0 120px, transparent 122px), linear-gradient(135deg, #da5d72 0%, #bc2739 65%, #aa1126 100%)",
          }}
        >
          <div className="relative mx-auto aspect-square w-[clamp(180px,22vw,260px)] overflow-hidden rounded-full border-[7px] border-white/95 shadow-[0_14px_26px_rgba(39,7,8,0.28)]">
            <Image
              src="/images/hero-main.jpg"
              alt="Chocolate cake with berries"
              fill
              sizes="(max-width: 1024px) 220px, 260px"
              className="object-cover"
              priority
            />
          </div>

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
            <div className="relative aspect-square w-28 overflow-hidden rounded-full border-[6px] border-white/95 shadow-[0_10px_20px_rgba(39,7,8,0.28)]">
              <Image
                src="/images/hero-mini-a.jpg"
                alt="Mini cake slice"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-28 overflow-hidden rounded-full border-[6px] border-white/95 shadow-[0_10px_20px_rgba(39,7,8,0.28)] lg:ml-4">
              <Image
                src="/images/hero-mini-b.jpg"
                alt="Mini cake slice"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          </aside>
        </section>

        <main className="-mt-6 mx-3 grid gap-8 rounded-[30px] border border-[#f0ded4] bg-[#fffdfb] p-4 sm:mx-4 sm:p-6 lg:mx-6 lg:p-8">
          <section aria-label="Menu section">
            <h2 className="font-[var(--font-title)] text-[clamp(2rem,3.2vw,2.8rem)] font-extrabold leading-[0.95] text-[#ad1f2f]">
              Menu
            </h2>
            <p className="mt-2 text-base font-bold text-[#7a4b54]">What will you wish for?</p>

            <div className="mt-4 flex gap-2" aria-hidden>
              {quickPills.map((Icon, index) => (
                <span
                  key={`quick-pill-${index}`}
                  className="grid h-8 w-8 place-items-center rounded-lg border border-[#edd6cd] bg-white text-[#ad1f2f]"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>

            <div className="mt-4 flex justify-end" role="tablist" aria-label="Menu tabs">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {categories.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      type="button"
                      role="tab"
                      key={item.name}
                      aria-selected={index === 0}
                      className={`grid h-[90px] w-[145px] place-items-center rounded-[18px] border bg-white px-3 py-3 text-sm font-black ${
                        index === 0
                          ? "border-[#e7bcc2] text-[#ad1f2f] shadow-[0_8px_18px_rgba(143,65,72,0.14)]"
                          : "border-[#ecd6cc] text-[#81434f]"
                      }`}
                    >
                      <Icon className="mb-1 h-5 w-5" />
                      {item.name}
                    </button>
                  );
                })}
              </div>
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

            <div
              className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
              aria-label="Product cards"
            >
              {products.map((product, index) => (
                <article
                  className="grid gap-2 rounded-[18px] border border-[#eeddd3] bg-white p-3"
                  key={`${product.name}-${index}`}
                >
                  <div className="relative aspect-[1.34] w-full overflow-hidden rounded-[14px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 220px, 200px"
                      className="object-cover"
                    />
                    <span className="absolute left-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-white/95 text-[#ad1f2f]">
                      <Heart className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <h4 className="text-[0.98rem] font-black leading-tight text-[#6f3743]">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline justify-between gap-2">
                    <strong className="text-[1.05rem] font-extrabold text-[#a72a3a]">
                      {product.price}
                    </strong>
                    <span className="text-[11px] font-bold text-[#a1737d]">{product.reviews}</span>
                  </div>
                  <div className="group inline-flex items-center gap-2">
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-[#fff6ec] px-2 py-1 transition-colors group-hover:bg-[#ffeede]">
                      {renderStars(product.rating)}
                    </span>
                    <span className="sr-only">
                      {product.rating} out of 5 stars based on {product.reviews} reviews
                    </span>
                  </div>
                  <button
                    type="button"
                    className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-[#a91d2f] text-white"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section aria-label="Our promise section">
            <h3 className="font-[var(--font-title)] text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[0.95] text-[#ad1f2f]">
              Our Promise
            </h3>
            <p className="mt-2 text-base font-bold text-[#7a4b54]">
              There is no secret spell, only honest work.
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_1fr]">
              <div className="grid gap-3 lg:h-[530px] lg:grid-rows-[1.55fr_1fr_0.62fr]">
                <div className="h-full rounded-[18px] border border-[#f0ddd2] bg-[#F9F1EE] p-4">
                  <div className="grid h-full grid-rows-[auto_1fr] gap-4">
                    <h4 className="font-[var(--font-title)] text-[2rem] font-extrabold leading-[1] text-[#8b505a]">
                      A glimpse, no secret spell, only social world!
                    </h4>
                    <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-4">
                      {promiseStats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <div
                            className="flex h-full flex-col items-center justify-center rounded-[14px] border border-[#efddd5] bg-[#fff9f6] p-3 text-center"
                            key={stat.label}
                          >
                            <span
                              className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#c97c88] text-[#9f4251]"
                              aria-hidden
                            >
                              <Icon className="h-5 w-5" />
                            </span>
                            <strong className="mt-2 text-[0.82rem] font-black uppercase tracking-[0.02em] text-[#7e4b55]">
                              {stat.label}
                            </strong>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="h-full rounded-[18px] border border-[#f0ddd2] bg-[#F9F1EE] p-4">
                  <div className="flex h-full flex-col justify-between gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#ffe8ab] via-[#ffd6dd] to-[#ffd29f] text-[#a72d3d] shadow-[0_8px_18px_rgba(167,45,61,0.2)]">
                        <Ticket className="h-8 w-8" />
                        <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#f4a305]" />
                      </span>
                      <div>
                        <h4 className="font-[var(--font-title)] text-[1.65rem] font-extrabold text-[#a72d3d]">
                          THE MAGICAL TICKET
                        </h4>
                        <p className="mt-1 text-sm font-bold text-[#82515a]">
                          Add 3 reminders in your account. Win offers worth Rs. 750
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="h-10 w-fit rounded-full bg-[#ad2030] px-4 text-xs font-black text-white"
                    >
                      UNLOCK NOW
                    </button>
                  </div>
                </div>

                <div className="h-full rounded-[18px] border border-[#f0ddd2] bg-[#F9F1EE] px-4 py-2">
                  <div className="flex h-full items-center gap-3">
                    <div className="flex items-center" aria-hidden>
                      {socialPeople.map((person, index) => (
                        <span
                          key={`person-${index}`}
                          className={`${index === 0 ? "" : "ml-2"} relative h-8 w-8 overflow-hidden rounded-full border border-[#e7d0c8] bg-[#f4d7cf]`}
                        >
                          <Image
                            src={person}
                            alt={`Social person ${index + 1}`}
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        </span>
                      ))}
                    </div>
                    <strong className="text-base font-black text-[#7e4650]">Follow us on social!</strong>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#f0ddd2] bg-[#F9F1EE] p-3 lg:h-[530px]">
                <div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-rows-3" aria-label="Customer moment gallery">
                  {galleryCards.map((item, index) => (
                    <article
                      className="flex h-full flex-col overflow-hidden rounded-[14px] border border-[#efd8cf] bg-white"
                      key={`${item.title}-${index}`}
                    >
                      <div className="relative min-h-[94px] flex-1 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <strong className="block p-2 text-sm font-extrabold text-[#79414a]">{item.title}</strong>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="px-4 pb-6 pt-6 lg:px-8" aria-label="Footer">
          <div className="rounded-[20px] bg-[#ad1f2f] px-5 py-4 text-center font-[var(--font-title)] text-[clamp(1.2rem,2.3vw,1.9rem)] font-extrabold text-white">
            Dakingo - Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(120px,1fr))]">
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
              <h6 className="text-sm font-black tracking-[0.05em] text-[#782f3b]">MORE INFO</h6>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Coupons & Offers
              </a>
              <a href="#" className="text-sm font-bold text-[#83505b]">
                Download App
              </a>
            </section>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end">
            <label className="w-full lg:max-w-[360px]">
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
            <div className="inline-flex items-center gap-2 text-[#8b5660]">
              <CircleHelp className="h-4 w-4" />
              <span className="text-xs font-bold">Hey, need any help?</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
