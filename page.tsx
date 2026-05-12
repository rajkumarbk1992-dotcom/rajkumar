"use client";

import {
  Search,
  Moon,
  ArrowRight,
  Shield,
  Network,
  Server,
  Cloud,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* TOP BORDER */}
      <div className="h-[3px] bg-orange-500"></div>

      {/* NAVBAR */}
      <header className="border-b border-white/5 backdrop-blur-xl sticky top-0 z-50 bg-black/60">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 flex items-center justify-center font-black text-3xl shadow-2xl">
              R
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight">
                RAJKUMAR BK
              </h1>

              <p className="text-zinc-400 text-sm">
                IT NETWORK ENGINEER
              </p>
            </div>

          </div>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10 text-lg">

            <a className="text-orange-500 font-semibold">
              Home
            </a>

            <a className="hover:text-orange-400 transition">
              Skills
            </a>

            <a className="hover:text-orange-400 transition">
              Experience
            </a>

            <a className="hover:text-orange-400 transition">
              Projects
            </a>

            <a className="hover:text-orange-400 transition">
              Contact
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden xl:flex items-center gap-5">

            <div className="flex items-center bg-zinc-900 border border-white/10 rounded-xl px-5 py-3 w-[280px]">

              <input
                type="text"
                placeholder="Search ..."
                className="bg-transparent outline-none flex-1 text-zinc-300"
              />

              <Search className="text-zinc-500" />

            </div>

            <button className="bg-white text-black p-4 rounded-xl hover:rotate-180 transition duration-500">
              <Moon size={20} />
            </button>

          </div>

        </div>

      </header>

      {/* HERO SECTION */}
      <section className="relative">

        {/* GLOW EFFECTS */}
        <div className="absolute top-32 left-20 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-flex items-center gap-3 bg-zinc-900 border border-white/10 px-5 py-3 rounded-full mb-8">

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-zinc-300">
                Available for IT Infrastructure Projects
              </span>

            </div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">

              Modern
              <br />

              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
                IT Network
              </span>

              <br />

              Engineer

            </h1>

            <p className="text-zinc-400 text-xl leading-10 mt-10 max-w-2xl">

              Passionate IT Network Engineer living in Japan with experience in
              enterprise networking, Microsoft 365, Active Directory,
              virtualization, cloud technologies, VPN troubleshooting,
              infrastructure operations, and enterprise IT support.

            </p>

            <p className="text-zinc-500 text-lg leading-9 mt-8 max-w-2xl">

              Currently working in a multinational company supporting
              enterprise-level infrastructure, endpoint management,
              Microsoft ecosystems, cloud operations, and network environments.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-6 mt-14">

              <button className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-2xl text-xl font-semibold shadow-[0_20px_80px_rgba(255,115,0,0.35)] flex items-center gap-3">

                Explore Portfolio

                <ArrowRight />

              </button>

              <button className="bg-zinc-900 border border-white/10 hover:border-orange-500 transition px-10 py-5 rounded-2xl text-xl font-semibold">
                Download Resume
              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-10 mt-20 border-t border-white/10 pt-10">

              <div>
                <h2 className="text-5xl font-black text-orange-500">
                  3+
                </h2>

                <p className="text-zinc-500 mt-3">
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black text-orange-500">
                  100+
                </h2>

                <p className="text-zinc-500 mt-3">
                  Tickets Solved
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black text-orange-500">
                  24/7
                </h2>

                <p className="text-zinc-500 mt-3">
                  IT Operations
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* MAIN CARD */}
            <div className="relative bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[40px] p-10 shadow-[0_20px_100px_rgba(0,0,0,0.8)]">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                className="rounded-3xl"
              />

              {/* FLOATING CARD 1 */}
              <div className="absolute -left-10 top-20 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-[280px] shadow-2xl">

                <div className="flex items-center gap-5">

                  <div className="bg-orange-500 p-4 rounded-2xl">
                    <Network />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Networking
                    </h3>

                    <p className="text-zinc-400 mt-2 text-sm">
                      LAN • WAN • VPN • DNS
                    </p>

                  </div>

                </div>

              </div>

              {/* FLOATING CARD 2 */}
              <div className="absolute -right-10 bottom-10 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-[280px] shadow-2xl">

                <div className="flex items-center gap-5">

                  <div className="bg-purple-500 p-4 rounded-2xl">
                    <Cloud />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Cloud & M365
                    </h3>

                    <p className="text-zinc-400 mt-2 text-sm">
                      Azure • Intune • O365
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-500 uppercase tracking-[5px] mb-4">
              PROFESSIONAL EXPERTISE
            </p>

            <h2 className="text-6xl font-black">
              Technical Skills
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              {
                icon: <Network size={40} />,
                title: "Networking",
                desc: "VPN, LAN/WAN, DHCP, DNS, Firewall, Routing & Switching",
              },
              {
                icon: <Server size={40} />,
                title: "Windows Server",
                desc: "Active Directory, Group Policy, Hyper-V, File Server",
              },
              {
                icon: <Cloud size={40} />,
                title: "Cloud Services",
                desc: "Microsoft 365, Intune, Azure, Endpoint Management",
              },
              {
                icon: <Shield size={40} />,
                title: "IT Support",
                desc: "L1/L2 Troubleshooting, Ticketing, Enterprise Support",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:border-orange-500 transition duration-300 hover:-translate-y-2"
              >

                <div className="text-orange-500 mb-8">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8 text-lg">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}