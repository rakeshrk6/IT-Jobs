import { useEffect, useState } from "react";
import useFilter from "../../hooks/useFilter";
import JobFeed from "../JobFeed";
import JobFilter from "../JobFilter";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import Loading from "../Loading";
import { Pagination } from "@mui/material";

const Google = () => {
  const [data, setData] = useState([]);
  const [searchBoxVal, setSearchBoxVal] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [profileValue, setProfileValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const { searchText, filterPrompts, searchResultHook } = useFilter(data);

  useEffect(() => {
    setSearchedResults(searchResultHook);
  }, [searchText]);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    const searchTextValue = e.target.value;
    setSearchBoxVal(searchTextValue);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(searchTextValue);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/google?profile=${profileValue}&location=${locationValue}&page=${page}`
      );
      console.log(data.jobs);
      setData(data.jobs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-1">
      <section className=" w-[40rem]">
        <form
          className={`relative w-full flex-center bg-[#f0f0f0] py-7 px-5 rounded-md ${
            isSticky ? "sticky top-[70px] z-[200]" : ""
          }`}
        >
          <input
            name="searchBar"
            type="text"
            placeholder="Search by Role / Skills"
            value={searchBoxVal}
            onChange={handleSearchChange}
            required
            className="p-2.5 w-full outline outline-1 outline-gray-300 rounded-full px-6 focus-within:outline-gray-700"
          />
          {searchBoxVal && (
            <RxCross2
              alt="clear_icon"
              width={30}
              height={30}
              className="absolute right-10 top-[42px] cursor-pointer"
              onClick={() => setSearchBoxVal("")}
            />
          )}
        </form>

        {loading ? (
          <Loading />
        ) : searchText.length > 0 || searchBoxVal ? (
          <JobFeed data={searchedResults} />
        ) : (
          <JobFeed data={data} />
        )}
        <div className="flex justify-center mt-8">
          <Pagination count={totalPages} onChange={(e, v) => setPage(v)} />
        </div>
      </section>
      <JobFilter
        fetchData={fetchData}
        setProfile={setProfileValue}
        setLocation={setLocationValue}
      />
    </div>
  );
};

export default Google;
