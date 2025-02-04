import React from "react";
import Moralis from "moralis";

export default function KYCScreen(props) {
  const options = {
    type: "native",
    amount: Moralis.Units.ETH("0.1"),
    receiver: "0x3F7c7FC1E76a632fBa3ab74bad4a8F7cbF894800",
  };
  Moralis.enableWeb3();
  return (
    <div>
      <section class="bg-bg">
        <div class="max-w-screen px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 lg:items-start">
            <div class="lg:sticky lg:top-16">
              <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:grid-rows-2">
                <div class="relative h-64 col-span-2 lg:h-96 sm:row-span-2">
                  <img
                    class="absolute inset-0 object-cover w-full h-full rounded-lg"
                    src="https://www.hyperui.dev/photos/university-1.jpeg"
                    alt=""
                  />
                </div>

                <div class="relative h-32 col-span-1 sm:h-auto">
                  <img
                    class="absolute inset-0 object-cover w-full h-full rounded-lg"
                    src="https://www.hyperui.dev/photos/university-2.jpeg"
                    alt=""
                  />
                </div>

                <div class="relative h-32 col-span-1 sm:h-auto">
                  <img
                    class="absolute inset-0 object-cover w-full h-full rounded-lg"
                    src="https://www.hyperui.dev/photos/university-3.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 px-4 pt-4  md:grid-cols-3 lg:grid-cols-1 gap-y-8">
                <div class="md:col-span-2 md:pr-8">
                  <h2
                    style={{ fontFamily: "Poppins" }}
                    class="text-2xl font-bold text-gray-900 sm:text-3xl"
                  >
                    {props.title}
                  </h2>

                  <p class="mt-2 text-gray-500">{props.description}</p>

                  <dl class="flex items-center mt-6">
                    <div class="flex items-center">
                      <span class="p-2 text-white bg-primary rounded-full">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </span>

                      <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
                        <dt>Reviews</dt>
                        <dd class="order-first">{props.reviews}</dd>
                      </span>
                    </div>
                  </dl>
                </div>

                <div>
                  <div class="flex items-stretch md:justify-end lg:justify-start"></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl"
                href=""
              >
                <h5
                  style={{ fontFamily: "Poppins" }}
                  class="mt-1 text-xl font-bold text-gray-900"
                >
                  Guest 1
                </h5>
                <input
                  placeholder="Name"
                  className="border border-secondary rounded-md mt-5"
                />
                <br />
                <input
                  placeholder="Age"
                  className="border border-secondary rounded-md mt-5"
                />
                <br />
                <input
                  placeholder="KYC Document"
                  type="file"
                  className=" rounded-md mt-5"
                />
              </div>

              <div
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-xl"
                href=""
              >
                <h5
                  style={{ fontFamily: "Poppins" }}
                  class="mt-1 text-xl font-bold text-gray-900"
                >
                  Guest 2
                </h5>
                <input
                  placeholder="Name"
                  className="border border-secondary rounded-md mt-5"
                />
                <br />
                <input
                  placeholder="Age"
                  className="border border-secondary rounded-md mt-5"
                />
                <br />
                <input
                  placeholder="KYC Document"
                  type="file"
                  className=" rounded-md mt-5"
                />
              </div>

              <button
                class=" px-5 py-3 ml-3 font-medium text-white bg-primary rounded-lg "
                style={{ fontFamily: "Poppins" }}
                onClick={async () => {
                  let result = await Moralis.transfer(options);
                  console.log(result);
                }}
              >
                Pay 0.05 ETH and book
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
