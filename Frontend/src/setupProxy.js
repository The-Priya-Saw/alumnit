import proxy from "http-proxy-middleware";
export default (app) => {
    app.use(proxy("/scrape",{ target: "htpp://localhost:3002"}))
}