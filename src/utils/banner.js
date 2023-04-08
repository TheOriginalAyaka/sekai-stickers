function bannerViewed() {
  const viewed = Boolean(localStorage.getItem("banner-viewed"));
  return viewed;
}

function setBannerViewed() {
  localStorage.setItem("banner-viewed", true);
}

export { bannerViewed, setBannerViewed };
