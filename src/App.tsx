import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  X, 
  Palette, 
  Download, 
  Users, 
  Clock, 
  Sparkles, 
  FileImage, 
  MessageCircle, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Star,
  Award,
  Smartphone,
  CreditCard
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "ডেলিভারি টাইম কত?",
      answer: "পেমেন্ট কনফার্ম হওয়ার পর ১-২ ঘন্টার মধ্যে আপনার Canva EDU একাউন্ট ডেলিভারি করা হবে। আমরা সর্বোচ্চ ২৪ ঘন্টার গ্যারান্টি দিচ্ছি।"
    },
    {
      question: "এই অফার কি লিগাল?",
      answer: "হ্যাঁ, এটি সম্পূর্ণ লিগাল। আমরা Canva Education Program এর অধীনে বাংলাদেশের শিক্ষার্থীদের জন্য বিশেষ মূল্যে এই সেবা প্রদান করছি।"
    },
    {
      question: "আমি কি এটি ব্যবসায়িক কাজে ব্যবহার করতে পারব?",
      answer: "অবশ্যই! Canva Pro-এর সমস্ত ফিচার আপনি ব্যবসায়িক কাজে ব্যবহার করতে পারবেন, যেমন ক্লায়েন্টের ডিজাইন, ফ্রিল্যান্সিং প্রজেক্ট, এবং মার্কেটিং কন্টেন্ট তৈরি।"
    },
    {
      question: "একাউন্টটি কি লাইফটাইম?",
      answer: "হ্যাঁ, এটি একবার কেনার পর আপনি আজীবন ব্যবহার করতে পারবেন। কোন মাসিক বা বার্ষিক ফি নেই।"
    },
    {
      question: "পেমেন্ট কিভাবে করব?",
      answer: "বিকাশ, নগদ, রকেট বা অন্যান্য মোবাইল ব্যাংকিং এর মাধ্যমে পেমেন্ট করতে পারবেন। WhatsApp এ যোগাযোগ করলে বিস্তারিত জানতে পারবেন।"
    }
  ];

  const features = [
    {
      icon: <Palette size={24} className="text-purple-600" />,
      title: "প্রিমিয়াম টেমপ্লেট",
      description: "১০০,০০০+ প্রিমিয়াম টেমপ্লেট অ্যাক্সেস করুন যা ফ্রি ভার্শনে নেই"
    },
    {
      icon: <FileImage size={24} className="text-purple-600" />,
      title: "রয়্যালটি-ফ্রি ফটো",
      description: "১০০ মিলিয়ন+ স্টক ফটো, ভিডিও এবং গ্রাফিক্স ব্যবহার করুন"
    },
    {
      icon: <Download size={24} className="text-purple-600" />,
      title: "ট্রান্সপারেন্ট ব্যাকগ্রাউন্ড",
      description: "ব্যাকগ্রাউন্ড রিমুভ করুন এবং ট্রান্সপারেন্ট PNG ডাউনলোড করুন"
    },
    {
      icon: <Users size={24} className="text-purple-600" />,
      title: "টিম কোলাবোরেশন",
      description: "আপনার টিম বা ক্লায়েন্টদের সাথে প্রজেক্ট শেয়ার করুন"
    },
    {
      icon: <Clock size={24} className="text-purple-600" />,
      title: "কন্টেন্ট প্ল্যানার",
      description: "সোশ্যাল মিডিয়া পোস্ট শিডিউল করুন এবং সময় বাঁচান"
    },
    {
      icon: <Sparkles size={24} className="text-purple-600" />,
      title: "ম্যাজিক এডিট",
      description: "AI দিয়ে ইমেজ এডিট করুন, টেক্সট টু ইমেজ ফিচার ব্যবহার করুন"
    }
  ];

  const testimonials = [
    {
      name: "তানভীর আহমেদ",
      role: "গ্রাফিক ডিজাইনার",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Canva EDU একাউন্ট কেনার পর আমার ফ্রিল্যান্সিং কাজ অনেক সহজ হয়ে গেছে। ক্লায়েন্টদের দ্রুত ডিজাইন দেখাতে পারি এবং প্রিমিয়াম এলিমেন্ট ব্যবহার করে কাজের মান বাড়িয়েছি।"
    },
    {
      name: "নুসরাত জাহান",
      role: "কন্টেন্ট ক্রিয়েটর",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "মাত্র ৯৯ টাকায় লাইফটাইম Canva Pro ফিচার পাওয়া অবিশ্বাস্য! আমার ইউটিউব থাম্বনেইল এবং ইনস্টাগ্রাম পোস্ট এখন অনেক প্রফেশনাল দেখায়।"
    },
    {
      name: "রাকিব হাসান",
      role: "স্টুডেন্ট",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "প্রেজেন্টেশন তৈরি করতে Canva EDU একাউন্ট অসাধারণ সাহায্য করেছে। প্রিমিয়াম টেমপ্লেট ব্যবহার করে আমার অ্যাসাইনমেন্টগুলো এখন ক্লাসের সেরা হয়।"
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Canva Pro'র সব ফিচার মাত্র ৯৯ টাকায় লাইফটাইম অ্যাক্সেস!
              </h1>
              <p className="text-xl mb-8">
                বাংলাদেশের শিক্ষার্থী, ফ্রিল্যান্সার এবং কন্টেন্ট ক্রিয়েটরদের জন্য বিশেষ Canva EDU অফার - যা আপনার ডিজাইন জার্নি সম্পূর্ণ বদলে দেবে।
              </p>
              <a 
                href="https://wa.me/+8801781-272345?text=আমি%20Canva%20EDU%20অ্যাকাউন্ট%20কিনতে%20চাই" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp এ অর্ডার করুন
              </a>
              <div className="mt-6 flex items-center gap-4">
                <img src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="bKash" className="h-8" />
                <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg" alt="Nagad" className="h-8" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white p-1 rounded-lg shadow-2xl">
                <img 
                  src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/07/screenshots-of-canva-showing-some-canva-pro-features.jpg" 
                  alt="Canva Pro Features" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">ফ্রি Canva ব্যবহারে আপনি কি এই সমস্যাগুলো ফেস করেন?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 mt-1 text-red-500">
                <X size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">সীমিত টেমপ্লেট অ্যাক্সেস</h3>
                <p className="text-gray-600">ফ্রি ভার্শনে অনেক প্রিমিয়াম টেমপ্লেট লক থাকে, যা আপনার ক্রিয়েটিভিটিকে সীমিত করে।</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 mt-1 text-red-500">
                <X size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">ব্যাকগ্রাউন্ড রিমুভ করতে পারেন না</h3>
                <p className="text-gray-600">ফ্রি ভার্শনে ইমেজের ব্যাকগ্রাউন্ড রিমুভ করা যায় না, যা প্রফেশনাল ডিজাইনের জন্য অপরিহার্য।</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 mt-1 text-red-500">
                <X size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">সীমিত স্টক ফটো</h3>
                <p className="text-gray-600">প্রিমিয়াম স্টক ফটো, ভিডিও এবং গ্রাফিক্স ব্যবহার করতে পারেন না, যা আপনার ডিজাইনকে সাধারণ করে তোলে।</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="mr-4 mt-1 text-red-500">
                <X size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">টিম কোলাবোরেশন নেই</h3>
                <p className="text-gray-600">ফ্রি ভার্শনে টিম মেম্বার বা ক্লায়েন্টদের সাথে সহজে কাজ করা যায় না, যা প্রজেক্ট ম্যানেজমেন্ট জটিল করে।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Canva EDU একাউন্টে কী কী পাবেন?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            মাত্র ৯৯ টাকায় Canva Pro'র সমস্ত প্রিমিয়াম ফিচার লাইফটাইম অ্যাক্সেস করুন এবং আপনার ডিজাইন স্কিল নতুন লেভেলে নিয়ে যান।
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">আমাদের গ্রাহকদের অভিজ্ঞতা</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="inline-block text-yellow-400 mr-1" fill="#FBBF24" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">সীমিত সময়ের অফার!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              অফার শেষ হওয়ার আগে অর্ডার করলে পাচ্ছেন ৩টি বিশেষ বোনাস যা আপনার ডিজাইন স্কিল আরও উন্নত করবে।
            </p>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">দিন</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">ঘন্টা</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">মিনিট</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">সেকেন্ড</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Award className="text-yellow-300 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">বোনাস #১: ডিজাইন মাস্টারক্লাস</h3>
              <p>Canva Pro দিয়ে প্রফেশনাল ডিজাইন তৈরির ৫টি ভিডিও টিউটোরিয়াল</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Award className="text-yellow-300 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">বোনাস #২: ১০০+ প্রিমিয়াম ফন্ট</h3>
              <p>বাংলা এবং ইংরেজি প্রিমিয়াম ফন্ট কালেকশন যা আপনার ডিজাইনকে আকর্ষণীয় করবে</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Award className="text-yellow-300 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">বোনাস #৩: ফ্রিল্যান্সিং গাইড</h3>
              <p>Canva দিয়ে কিভাবে ফ্রিল্যান্সিং করে আয় করবেন তার কমপ্লিট গাইডবুক</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://wa.me/+8801781-272345?text=আমি%20Canva%20EDU%20অ্যাকাউন্ট%20কিনতে%20চাই" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300"
            >
              <MessageCircle className="mr-2" size={20} />
              এখনই অর্ডার করুন
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">সাধারণ জিজ্ঞাসা</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-150"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <ShieldCheck size={24} className="text-green-600 mr-2" />
              <span className="font-medium">১০০% সিকিউর পেমেন্ট</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 size={24} className="text-green-600 mr-2" />
              <span className="font-medium">৫০০+ সন্তুষ্ট গ্রাহক</span>
            </div>
            <div className="flex items-center">
              <Clock size={24} className="text-green-600 mr-2" />
              <span className="font-medium">দ্রুত ডেলিভারি</span>
            </div>
            <div className="flex items-center">
              <Users size={24} className="text-green-600 mr-2" />
              <span className="font-medium">২৪/৭ সাপোর্ট</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">আপনার ডিজাইন জার্নি আজই শুরু করুন!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            মাত্র ৯৯ টাকায় Canva Pro'র সমস্ত ফিচার লাইফটাইম অ্যাক্সেস করুন। এই অফার সীমিত সময়ের জন্য!
          </p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href="https://wa.me/+8801781-272345?text=আমি%20Canva%20EDU%20অ্যাকাউন্ট%20কিনতে%20চাই" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full inline-flex items-center text-lg transition duration-300"
            >
              <MessageCircle className="mr-2" size={24} />
              WhatsApp এ অর্ডার করুন
            </a>
            <div className="flex items-center gap-4 mt-4">
              <img src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="bKash" className="h-8" />
              <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg" alt="Nagad" className="h-8" />
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            * অর্ডার করার পর আমাদের সাপোর্ট টিম আপনার সাথে যোগাযোগ করবে
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <p className="mb-2">© {new Date().getFullYear()} Canva EDU Bangladesh. সর্বসত্ব সংরক্ষিত।</p>
          <p className="text-sm">
            Canva হল Canva, Inc. এর একটি ট্রেডমার্ক। আমরা Canva, Inc. এর সাথে সরাসরি সম্পর্কিত নই।
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;