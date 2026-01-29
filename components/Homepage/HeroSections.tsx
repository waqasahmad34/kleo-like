import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSections = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex justify-center items-center m-2 sm:m-4 md:m-6 border-1 border-default rounded-2xl overflow-hidden">
      {/* Star-like background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px] opacity-50 z-0" />

      {/* Background shape image */}
      <div className="absolute inset-0 w-full h-full z-[1]">
        <Image
          src="/hero_bg_shape.png"
          alt="Background shape"
          fill
          className="object-cover object-bottom"
          priority
          quality={100}
        />
      </div>

      {/* Flowing dots animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <div className="absolute inset-0">
          {/* Row 1 */}
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[8%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[18%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[28%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[38%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[48%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[58%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[68%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[78%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[88%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/30 rounded-full left-[98%] bottom-0 animate-flow-up" />
          
          {/* Row 2 */}
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[3%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[13%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[23%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[33%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[43%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[53%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[63%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[73%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[83%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/20 rounded-full left-[93%] bottom-0 animate-flow-up" />
          
          {/* Row 3 */}
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[5%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[15%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[25%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[35%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[45%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[55%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[65%] bottom-0 animate-flow-up-delayed-2" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[75%] bottom-0 animate-flow-up" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[85%] bottom-0 animate-flow-up-delayed" />
          <div className="absolute w-0.5 h-0.5 bg-white/15 rounded-full left-[95%] bottom-0 animate-flow-up-delayed-2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-7 gap-6 sm:gap-8 items-center">
          {/* Left Section - Hero Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full lg:col-span-3">
            {/* User Count */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#6670FF] to-[#8B5CF6] border-2 border-black" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#73cfa8] to-[#73b1ff] border-2 border-black" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#fb9289] to-[#fde179] border-2 border-black" />
              </div>
              <span className="whitespace-nowrap">2M Users worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Meet Your New AI-Powered Team Member
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Automate tasks, scale customer service, and boost productivity
              with intelligent AI agents that think.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button className="bg-gradient-to-r from-[#6670FF] to-[#8B5CF6] hover:from-[#5560E6] hover:to-[#7B4CE6] text-white font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg shadow-[#6670FF]/30 transition-all text-sm sm:text-base w-full sm:w-auto">
                Get Started For Free
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all text-sm sm:text-base w-full sm:w-auto"
              >
                Book A Demo
              </Button>
            </div>
          </div>

          {/* Right Section - AI Chat Interface */}
          <div className="w-full lg:col-span-4 mt-8 md:mt-0">
            {/* Floating GitHub Icon */}
            <div className="border-1 relative border-default overflow-hidden rounded-2xl md:rounded-4xl">
              {/* Floating icons - hidden on mobile, visible on tablet+ */}
                <div className="hidden md:block absolute bottom-5 left-0 rotate-15 animate-slow-bounce -z-20">
                <div className="p-3 sm:p-4 bg-[#3e31b5]/20 rounded-lg shadow-lg flex items-center justify-center">
                  <Image
                    src="/github.svg"
                    alt="GitHub Icon"
                    width={20}
                    height={20}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    unoptimized
                  />
                </div>
              </div>
              <div className="hidden md:block absolute top-0 left-[50%] rotate-15 animate-slow-bounce  -z-20">
                <div className="p-3 sm:p-4 bg-[#3e31b5]/20 rounded-lg shadow-lg flex items-center justify-center">
                  <Image
                    src="/tools.svg"
                    alt="Tools Icon"
                    width={20}
                    height={20}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    unoptimized
                  />
                </div>
              </div>
              <div className="bg-[#1a1b23] m-4 sm:m-8 md:m-12 lg:m-20 rounded-xl md:rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-white font-semibold text-sm sm:text-base">
                      Devgent AI 4.0
                    </span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    <button className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="hidden sm:inline">History</span>
                    </button>
                  </div>
                </div>

                {/* Prompt Area */}
                <div className="p-4 sm:p-6">
                  <div className="relative bg-gradient-to-r from-[#6670FF] to-[#8B5CF6] rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg max-w-full sm:max-w-[380px] animate-float">
                    {/* Sparkle/Magic Wand Icon */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed pl-6 sm:pl-8">
                      Ask Devgent AI to create with you! The more details you
                      share, the better it will deliver. Or, pick a pre-made
                      prompt.
                    </p>
                  </div>
                </div>

                {/* Input Field */}
                <div className="p-3 sm:p-4 border-white/10">
                  <div className="relative h-[150px] sm:h-[180px] md:h-[200px] flex flex-col gap-2 sm:gap-3 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 p-3 sm:p-4 focus-within:border-[#6670FF]/50 transition-colors">
                    <input
                      type="text"
                      placeholder="Message Devgent AI..."
                      className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-xs sm:text-sm"
                    />
                    <div className="flex items-center justify-between">
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                      </button>

                      <button className="text-gray-400 hover:text-white transition-colors">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
