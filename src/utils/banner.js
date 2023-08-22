function bannerViewed() {
  const viewed = Boolean(localStorage.getItem("banner-viewed-3"));
  return viewed;
}

function setBannerViewed() {
  localStorage.setItem("banner-viewed-3", true);
}

export { bannerViewed, setBannerViewed };
