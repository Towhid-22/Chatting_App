import React from "react";
import Sidebar from "./Sidebar";
import { Button } from "@material-tailwind/react";

const Group = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <>
          <div className="bg-gray-900 w-full min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
              {/* Content */}
              <div className="flex-1 px-2 sm:px-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-extralight text-white/70">
                    Groups
                  </h3>
                  <div>
                    <form class="flex items-center max-w-lg mx-auto">
                      <label for="voice-search" class="sr-only">
                        Search
                      </label>
                      <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-gray-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="voice-search"
                          class="bg-gray-50 border border-gray-300 px-[40px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search groups"
                          required
                        />
                        <button
                          type="button"
                          class="absolute inset-y-0 end-0 flex items-center pe-3"
                        >
                          <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                            />
                          </svg>
                        </button>
                      </div>
                      <button
                        type="submit"
                        class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          class="w-4 h-4 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        Search
                      </button>
                    </form>
                  </div>
                  <div className="inline-flex items-center space-x-2">
                    <a
                      className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </a>
                    <a
                      className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <div className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
                    <a
                      className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </a>
                    <a
                      className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
                      href="#"
                    >
                      Create group
                    </a>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="cuisine"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Cuisine
                    </h4>
                    <p className="text-white/50 pb-5">55 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      22 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                      alt="art"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Art
                    </h4>
                    <p className="text-white/50 pb-5">132 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      4 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="gaming"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Gaming
                    </h4>
                    <p className="text-white/50 pb-5">207 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      0 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-red-400 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                      alt="cinema"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      cinema
                    </h4>
                    <p className="text-white/50 pb-5">105 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      12 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="song"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Song
                    </h4>
                    <p className="text-white/50 pb-5">67 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      3 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="code"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Code
                    </h4>
                    <p className="text-white/50 pb-5">83 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      43 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="dancing"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Dancing
                    </h4>
                    <p className="text-white/50 pb-5">108 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      86 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="cuisine"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Cuisine
                    </h4>
                    <p className="text-white/50 pb-5">55 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      22 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                      alt="art"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Art
                    </h4>
                    <p className="text-white/50 pb-5">132 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      4 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="gaming"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Gaming
                    </h4>
                    <p className="text-white/50 pb-5">207 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      0 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-red-400 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                      alt="cinema"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      cinema
                    </h4>
                    <p className="text-white/50 pb-5">105 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      12 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="song"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Song
                    </h4>
                    <p className="text-white/50 pb-5">67 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      3 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="code"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Code
                    </h4>
                    <p className="text-white/50 pb-5">83 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      43 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="dancing"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Dancing
                    </h4>
                    <p className="text-white/50 pb-5">108 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      86 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                    <img
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt="dancing"
                    />
                    <h4 className="text-white text-2xl font-bold capitalize text-center">
                      Dancing
                    </h4>
                    <p className="text-white/50 pb-5">108 members</p>
                    <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                      86 Online{" "}
                      <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
                    </p>
                    <div className="mt-5">
                      <Button color="blue" className="rounded-[3px]">
                        Join Group
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Group;
