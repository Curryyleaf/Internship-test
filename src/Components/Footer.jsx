import React from "react";
import Facebook from './Assets/icon-facebook.svg'
import Instagram from './Assets/icon-instagram.svg'
import Pinteret from './Assets/icon-pinterest.svg'
import Twitter from './Assets/icon-twitter.svg'
import Youtube from './Assets/icon-youtube.svg'

function Footer() {
  return (
    // footer

    <footer class="bg-black">
      <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* logo and social container */}
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/* logo */}
          <div class="mx-auto my-6 text-white text-center md:hidden">
            Copyright &copy; @2022 All Rights Reserved
          </div>
          <div>
            <img src="img/logo-white.svg" class="h-8" />
          </div>

          {/* social links */}

          <div class="flex justify-center space-x-4">
            {/* links */}
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
            <a href="#">
              <img src={Youtube} alt="" />
            </a>
            <a href="#">
              <img src={Pinteret} alt="" />
            </a>
            <a href="#">
              <img src={Twitter} />
            </a>
          </div>
        </div>
        {/* links container */}
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="" class="hover:text-red-600">
              sdfgsd
            </a>
            <a href="" class="hover:text-red-600">
              wdfghj
            </a>
            <a href="" class="hover:text-red-600">
              wertyui
            </a>
            <a href="" class="hover:text-red-600">
              xcvbnm
            </a>
            <a href="" class="hover:text-red-600">
              lkjhgf
            </a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="" class="hover:text-red-600">
              Careers
            </a>
            <a href="" class="hover:text-red-600">
              Communities
            </a>
            <a href="" class="hover:text-red-600">
              Privacy policy
            </a>
          </div>
        </div>

        {/* inputs */}
        <div class="flex flex-col justify-between">
          <form a>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                name=""
                id=""
              />

              <button class="px-6 py-2 text-white rounded-full bg-red-600 hover:bg-fuchsia-700 focus:outline-none">
                Go
              </button>
            </div>
          </form>

          <div class="hidden text-white md:block">
            Copyright &copy; @2022 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
