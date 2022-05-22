import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white'>
            <div className=' lg:max-w-7xl mx-auto lg:px-12'>
                <footer class="footer p-10 text-base-content ">
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span class="footer-title">Newsletter</span>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text">Enter your email address</span>
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
                <hr />
                <p className='py-4 text-center'><small>Copyright © 2022 - All right reserved to Utsobe 俊哲</small></p>
            </div>
        </div>
    );
};

export default Footer;