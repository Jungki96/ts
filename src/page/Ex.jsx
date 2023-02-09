const [loading, setLoading] = useState(true); // 로딩중인지 아닌지를 담기위한 state
const [instaData, setInstaData] = useState([]); // API로부터 받아온 내 피드 데이터를 배열에 저장
const [instaPaging, setInstaPaging] = useState < IPagingData > { next: undefined }; // API로부터 받아온 다음 페이지 데이터를 저장

const fetchInstaFeeds = async () => {
  // 로딩중인 상태로 전환
  setLoading(true);

  await axios
    .get(`${baseUrl}?fields=id,caption,media_url,media_type&access_token=${token}`)
    .then((response) => {
      // GET 요청으로 받아온 데이터를 state에 잘 넣어줍니다
      setInstaData(response.data.data);
      setInstaPaging(response.data.paging);
    })
    .catch((error) => {
      // Error 핸들링
      console.log(error);
    });
  // 로딩중이지 않은 상태로 전환
  setLoading(false);
};

// 컴포넌트가 마운트되면 해당 함수를 호출해서 초기 데이터를 받아옵니다.
useEffect(() => {
  fetchInstaFeeds();
}, []);

// 추가
const [fetching, setFetching] = useState(false); // 추가 데이터를 로드하는지 아닌지를 담기위한 state

const fetchMoreInstaFeeds = async () => {
  // 추가 데이터를 로드하는 상태로 전환
  setFetching(true);

  // API로부터 받아온 페이징 데이터를 이용해 다음 데이터를 로드
  await axios.get(instaPaging.next).then((response) => {
    const fetchedData = response.data.data; // 피드 데이터 부분
    // 기존 데이터 배열과 새로 받아온 데이터 배열을 합쳐 새 배열을 만들고 state에 저장한다.
    const mergedData = instaData.concat(...fetchedData);
    setInstaData(mergedData);
  });
  // 추가 데이터 로드 끝
  setFetching(false);
};

// 스크롤 이벤트 핸들러
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
    // 페이지 끝에 도달하면 추가 데이터를 받아온다
    fetchMoreInstaFeeds();
  }
};

useEffect(() => {
  // scroll event listener 등록
  window.addEventListener("scroll", handleScroll);
  return () => {
    // scroll event listener 해제
    window.removeEventListener("scroll", handleScroll);
  };
});
