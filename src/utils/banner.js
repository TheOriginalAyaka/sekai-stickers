function bannerViewed() {
  const viewed = Boolean(localStorage.getItem("banner-viewed-2"));
  return viewed;
}

function setBannerViewed() {
  localStorage.setItem("banner-viewed-2", true);
}

export { bannerViewed, setBannerViewed };
