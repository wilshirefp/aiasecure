/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["vercel.app","aiasecurities-o2e4rbc02-marketing-pantummedia.vercel.app"],
    unoptimized:  true,
  },
  loader:"imgix",
  path:"",
}

module.exports = nextConfig
