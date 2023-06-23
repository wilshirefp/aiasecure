/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["vercel.app"]
  },
  loader:"imgix",
  path:"",
}

module.exports = nextConfig
