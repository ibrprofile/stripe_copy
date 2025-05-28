"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Search,
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  CreditCard,
  BarChart3,
  Users,
} from "lucide-react"

export default function StripePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-white font-bold text-xl">stripe</div>

              <nav className="hidden lg:flex items-center space-x-8">
                <div className="relative group">
                  <button className="text-white hover:text-white/80 flex items-center space-x-1">
                    <span>Products</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-white hover:text-white/80 flex items-center space-x-1">
                    <span>Solutions</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-white hover:text-white/80 flex items-center space-x-1">
                    <span>Developers</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-white hover:text-white/80 flex items-center space-x-1">
                    <span>Resources</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <button className="text-white hover:text-white/80">Pricing</button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <button className="text-white hover:text-white/80">Sign in</button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Contact sales
                </Button>
              </div>

              <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Sessions 2025 Banner */}
        <div className="bg-black/10 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  Sessions 2025 • Watch on demand
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-white text-sm">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>ROCKET RIDES</span>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <Input
                    placeholder="Search"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-pink-500/90 to-orange-400/90"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Financial
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    infrastructure
                  </span>
                  <br />
                  to grow{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    your
                  </span>
                  <br />
                  revenue
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/90 max-w-lg"
              >
                Join the millions of companies that use Stripe to accept payments online and in person, embed financial
                services, power custom revenue models, and build a more profitable business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <Input
                  placeholder="Email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 max-w-xs"
                />
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8">
                  Start now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-6"
              >
                {/* Payment Form Mockup */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">A</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Abstraction Magazine</h3>
                          <p className="text-sm text-gray-600">£19 per month</p>
                        </div>
                      </div>

                      <Button className="w-full bg-black text-white">
                        <span className="mr-2">🍎</span> Pay
                      </Button>

                      <div className="text-center text-sm text-gray-500">Or pay with card</div>

                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-700">Email</label>
                          <Input placeholder="klara.schurig@example.de" className="mt-1" />
                        </div>

                        <div>
                          <label className="text-sm font-medium text-gray-700">Card Information</label>
                          <div className="mt-1 grid grid-cols-2 gap-2">
                            <Input placeholder="1234 1234 1234 1234" />
                            <div className="grid grid-cols-2 gap-2">
                              <Input placeholder="MM / YY" />
                              <Input placeholder="CVC" />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                            <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
                            <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-gray-700">Country or region</label>
                          <select className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                            <option>Deutschland</option>
                          </select>
                        </div>

                        <Button className="w-full bg-slate-900 text-white">€135.00 zahlen</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics Dashboard Mockup */}
                <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Today</h3>
                        <div className="text-sm text-gray-500">Yesterday</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Net volume</div>
                          <div className="text-2xl font-bold">£3,528,198.72</div>
                          <div className="text-sm text-green-600">+32.8%</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Yesterday</div>
                          <div className="text-lg text-gray-400">£2,931,556.34</div>
                        </div>
                      </div>

                      <div className="h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-end justify-between p-4">
                        <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-12 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-16 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-10 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-20 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-80">
              <div className="text-white font-bold text-lg">OpenAI</div>
              <div className="text-white font-bold text-lg">amazon</div>
              <div className="text-white font-bold text-lg">Google</div>
              <div className="text-white font-bold text-lg">ANTHROPIC</div>
              <div className="text-white font-bold text-lg">Marriott</div>
              <div className="text-white font-bold text-lg">shopify</div>
              <div className="text-white font-bold text-lg">airbnb</div>
              <div className="text-white font-bold text-lg">URBN</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50 mb-4">
                  Modular solutions
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  A fully integrated suite of financial and payments products
                </h2>
              </div>

              <p className="text-xl text-gray-600">
                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered
                platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch
                (or invent) new business models.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-4 gap-4">
                {/* Product Icons Grid */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    {i === 5 && (
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded mx-auto mb-2"></div>
                        <div className="text-xs font-medium">Payments</div>
                      </div>
                    )}
                    {i === 9 && (
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded mx-auto mb-2"></div>
                        <div className="text-xs font-medium">Connect</div>
                      </div>
                    )}
                    {i === 13 && (
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded mx-auto mb-2"></div>
                        <div className="text-xs font-medium">Terminal</div>
                      </div>
                    )}
                    {![5, 9, 13].includes(i) && <div className="w-8 h-8 bg-gray-100 rounded"></div>}
                  </div>
                ))}
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <path
                  d="M 200 150 Q 250 200 200 250"
                  stroke="rgb(147 197 253)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60"
                />
                <path
                  d="M 150 200 Q 200 150 250 200"
                  stroke="rgb(147 197 253)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-slate-900">Billing</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Capture recurring revenue
                </h2>
              </div>

              <p className="text-xl text-gray-600">
                Manage flat rate, usage-based, and hybrid pricing models, minimize churn, and automate finance
                operations.
              </p>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Start with Billing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">See also</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Invoicing for invoice creation, collection, and tracking
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Usage-based billing for metering, billing, and consumption insights
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Sigma for custom revenue reports – no SQL required
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">A</span>
                    </div>
                    <div>
                      <div className="font-semibold">Abstraction</div>
                      <div className="text-sm text-gray-500">Products • Pricing • Contact</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Basic</h3>
                        <div className="text-sm text-gray-600 mb-4">Digital access</div>
                        <div className="text-3xl font-bold">
                          £9 <span className="text-sm font-normal text-gray-500">/month</span>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4">Subscribe</Button>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">This includes:</div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>Unlimited access to web content</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>Exclusive subscriber content</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">Premium</h3>
                          <Badge className="bg-purple-100 text-purple-700 text-xs">Popular</Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-4">Digital and print access</div>
                        <div className="text-3xl font-bold">
                          £19 <span className="text-sm font-normal text-gray-500">/month</span>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4">Subscribe</Button>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">This includes:</div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>Unlimited access to web content</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>Monthly print issues</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>Exclusive subscriber content</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payments Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="font-semibold text-slate-900">Payments</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Accept and optimise payments, globally
                </h2>
              </div>

              <p className="text-xl text-gray-600">
                Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using
                AI.
              </p>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Start with Payments
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">See also</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Tax for automating tax registration, collection, and filing
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Radar for AI-powered fraud protection
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Terminal for custom in-person payments
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-2xl">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-orange-400 rounded"></div>
                      </div>
                      <h3 className="font-semibold">Wood Chair 001</h3>
                      <div className="text-2xl font-bold mt-2">€135.00</div>
                    </div>

                    <Button className="w-full bg-black text-white">
                      <span className="mr-2">🍎</span> Pay
                    </Button>

                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      Pay with <span className="font-bold ml-1">link</span>
                    </Button>

                    <div className="text-center text-sm text-gray-500">Oder mit Karte bezahlen</div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">E-Mail</label>
                        <Input placeholder="klara.schurig@example.de" className="mt-1" />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">Zahlungsmethoden</label>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <div className="p-3 border border-gray-300 rounded-lg text-center">
                            <div className="w-8 h-5 bg-gray-800 rounded mx-auto mb-1"></div>
                            <div className="text-xs">Karte</div>
                          </div>
                          <div className="p-3 border border-gray-300 rounded-lg text-center">
                            <div className="text-sm font-bold text-pink-600">K</div>
                            <div className="text-xs">Klarna</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">Land/Region</label>
                        <select className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                          <option>Deutschland</option>
                        </select>
                      </div>

                      <Button className="w-full bg-slate-900 text-white">€135.00 zahlen</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-slate-900">Connect</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Set up multi-party payments and payouts
                </h2>
              </div>

              <p className="text-xl text-gray-600">
                Integrate payments into your platform or marketplace for end-to-end payments experiences.
              </p>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Start with Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">See also</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Terminal for custom in-person payments
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Instant Payouts for fast payments to users
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Payment Elements for customisable UIs
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-2xl border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Orders</h3>
                      <Button variant="ghost" size="sm">
                        <Menu className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">TODAY</div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium">#9125</div>
                          <div className="text-sm text-gray-600">Hanako Yamada</div>
                          <Badge className="bg-green-100 text-green-700 text-xs">Processing</Badge>
                        </div>
                        <div className="text-sm font-medium">£150.00</div>
                      </div>

                      <div className="text-xs text-gray-500 uppercase tracking-wide">YESTERDAY</div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="text-sm font-medium">#9124</div>
                            <div className="text-sm text-gray-600">Jacques Muller</div>
                            <Badge className="bg-green-100 text-green-700 text-xs">Processing</Badge>
                          </div>
                          <div className="text-sm font-medium">£200.00</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="text-sm font-medium">#9123</div>
                            <div className="text-sm text-gray-600">Mark Smith</div>
                            <Badge className="bg-blue-100 text-blue-700 text-xs">On hold</Badge>
                          </div>
                          <div className="text-sm font-medium">£178.00</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="text-sm font-medium">#9122</div>
                            <div className="text-sm text-gray-600">Sarah King</div>
                            <Badge className="bg-gray-100 text-gray-700 text-xs">Completed</Badge>
                          </div>
                          <div className="text-sm font-medium">£200.00</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="text-sm font-medium">#9121</div>
                            <div className="text-sm text-gray-600">Anna Nowak</div>
                            <Badge className="bg-gray-100 text-gray-700 text-xs">Completed</Badge>
                          </div>
                          <div className="text-sm font-medium">£200.00</div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 uppercase tracking-wide">OLDER THAN 2 DAYS</div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium">#9120</div>
                          <div className="text-sm text-gray-600">Wei Qing</div>
                        </div>
                        <div className="text-sm font-medium">£156.00</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <BarChart3 className="w-4 h-4" />
                          <span className="ml-1 text-xs">My store</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <CreditCard className="w-4 h-4" />
                          <span className="ml-1 text-xs">Orders</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Users className="w-4 h-4" />
                          <span className="ml-1 text-xs">Products</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Star className="w-4 h-4" />
                          <span className="ml-1 text-xs">Reviews</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Growth Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50 mb-4">
                  Built for growth
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Take your start-up further, faster
                </h2>
              </div>

              <p className="text-xl text-gray-600">
                Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with
                less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough
                for easy implementation and powerful enough to scale as fast and as far as you need.
              </p>
            </div>

            <div className="relative space-y-6">
              {/* Chat Interface */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">anything I can help with today?</span>
                    </div>

                    <div className="bg-green-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Hey, can I buy a licence just for myself?</p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-sm">Sure, in that case I'd recommend our starter plan.</p>
                      <a href="#" className="text-blue-600 text-sm underline">
                        buy.stripe.com/Aed3Ja
                      </a>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment QR Code */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold">£19.99</div>
                    <div className="text-sm text-gray-600">PER ITEM</div>

                    <div className="w-32 h-32 bg-black mx-auto rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-white" : "bg-black"}`} />
                        ))}
                      </div>
                    </div>

                    <div className="text-sm text-blue-600">Scan to pay</div>
                  </div>
                </CardContent>
              </Card>

              {/* Atlas Interface */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Atlas</h3>
                      <div className="text-sm text-gray-500">RocketRides, Inc.</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Incorporate your company</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Stock issued for founders</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Purchase your shares</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                        <span className="text-sm text-gray-500">File 83(b) election</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                        <span className="text-sm text-gray-500">Open a bank account</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Links */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
                  <span className="font-semibold">Payment Links</span>
                </div>
                <h3 className="text-xl font-bold">Validate your idea</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Scale Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <radialGradient id="grid" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.1)" />
                <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
              </radialGradient>
            </defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(147, 197, 253, 0.3)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />

            {/* Flowing lines */}
            <path
              d="M 0 400 Q 300 200 600 400 T 1200 400"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="opacity-60"
            />
            <path
              d="M 0 300 Q 400 100 800 300 T 1200 300"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              className="opacity-40"
            />

            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(147 197 253)" />
                <stop offset="50%" stopColor="rgb(196 181 253)" />
                <stop offset="100%" stopColor="rgb(147 197 253)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(196 181 253)" />
                <stop offset="50%" stopColor="rgb(147 197 253)" />
                <stop offset="100%" stopColor="rgb(196 181 253)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="text-blue-400 border-blue-400/30 bg-blue-400/10 mb-4">
                  Global scale
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">The backbone for global commerce</h2>
              </div>

              <p className="text-xl text-gray-300">
                Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around
                the world and we process hundreds of billions of pounds each year for ambitious businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">500M+</div>
                  <p className="text-gray-300">API requests per day, peaking at 13,000 requests a second.</p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">47+</div>
                  <p className="text-gray-300">countries with local acquiring.</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">99.999%</div>
                  <p className="text-gray-300">
                    historical uptime for{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                      Stripe services
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">135+</div>
                  <p className="text-gray-300">currencies and payment methods supported.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Support for any business type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From global AI companies to category-defining marketplaces, successful businesses across industries grow
              and scale with Stripe.
            </p>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div></div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Card */}
            <Card className="bg-white shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">AI</h3>

                  <p className="text-gray-600">
                    Stripe supports businesses across the AI ecosystem – from usage-based billing for AI assistants like
                    Perplexity to premium subscriptions for infrastructure providers like OpenAI.
                  </p>

                  <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <div className="pt-6 border-t">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>OpenAI</span>
                      <span>CURSOR</span>
                      <span>ANTHROPIC</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SaaS Card */}
            <Card className="bg-white shadow-lg border-t-4 border-t-blue-500">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">SaaS</h3>

                  <p className="text-gray-600">
                    Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions,
                    invoicing, tax, accounting, and more.
                  </p>

                  <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <div className="pt-6 border-t">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>slack</span>
                      <span>twilio</span>
                      <span>Linear</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marketplaces Card */}
            <Card className="bg-white shadow-lg border-t-4 border-t-green-500">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">Marketplaces</h3>

                  <p className="text-gray-600">
                    Get everything you need to launch and scale a marketplace: onboard providers, manage multi-party
                    payouts, all in one platform.
                  </p>

                  <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <div className="pt-6 border-t">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>BLOOMNATION</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50 mb-4">
                  Enterprise reinvention
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Bring agility to your enterprise
                </h2>
              </div>

              <p className="text-xl text-gray-600">
                Quickly build great payments experiences, improve performance, expand into new markets, and engage
                customers with subscriptions and marketplaces. Get expert integration guidance from our{" "}
                <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                  professional services
                </a>{" "}
                team and{" "}
                <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                  certified partners
                </a>
                , and connect Stripe to Salesforce, SAP, and more through the{" "}
                <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                  Stripe App Marketplace
                </a>
                .
              </p>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Explore Stripe for enterprises
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">5+</div>
                  <p className="text-gray-600">Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.</p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                  <p className="text-gray-600">Payment methods available on Stripe</p>
                </div>

                <div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-900">Products used</div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
                        <span className="text-sm">Payments</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                        <span className="text-sm">Connect</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-bold text-2xl">amazon</div>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                        <div className="w-4 h-4 border border-white rounded"></div>
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">
                        See how Amazon simplified cross-border payments with Stripe
                      </h3>
                    </div>

                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                      <div className="text-6xl font-bold transform rotate-12">amazon</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Issuing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">Issuing</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Build a fintech offering with banking-as-a-service
                </h2>
              </div>

              <p className="text-xl text-gray-600">
                Launch, manage, and scale a commercial card programme without any setup fees.
              </p>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Start with Issuing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">See also</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Treasury for financial accounts
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Capital for offering fast, flexible financing
                  </a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">
                    Connect for powering platform payments
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-2xl border-2 border-purple-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <div className="space-y-4">
                        <div className="w-16 h-10 bg-white rounded-lg border-2 border-purple-300 mx-auto"></div>
                        <div className="w-32 h-2 bg-purple-300 rounded-full mx-auto"></div>
                        <div className="w-24 h-2 bg-purple-200 rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="col-span-2">
              <div className="text-white font-bold text-xl mb-4">stripe</div>
              <p className="text-gray-400 text-sm">Financial infrastructure to grow your revenue</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Billing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Connect
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Issuing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Startups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    SaaS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Marketplaces
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Libraries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Plugins
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Newsroom
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex items-center justify-between">
            <div className="text-sm text-gray-400">© 2025 Stripe, Inc.</div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
