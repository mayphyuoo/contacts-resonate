import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import Nav from "./Nav";
import Card from "./Card";
import LoadingPage from "./LoadingPage";
import GoTop from "./GoTop";

function App() {
	const API_URL = "https://jsonplaceholder.typicode.com/users";

	const [contacts, setContacts] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const fetchContacts = async () => {
			await fetch(`${API_URL}`)
				.then((res) => res.json())
				.then((result) => {
					setContacts(result);
				});
		};
		fetchContacts().catch(console.error);

		setLoading(false);
	}, []);

    // goTop button
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showGoTop, setshowGoTop] = useState("goTopHidden");

    //DISPLAY SCROLL HANDLER
    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (scrollPosition > 50) {
        return setshowGoTop("goTop");
        } else if (scrollPosition < 50) {
        return setshowGoTop("goTopHidden");
        }
    };

    //SCROLL LISTENER
    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    });

    const refScrollUp = useRef();

    //SCROLL UP HANDLER
    const handleScrollUp = () => {
        refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    };

	return (
		<div className="App">
            <div ref={refScrollUp}></div>
			<Nav />
			{contacts && loading !== true ? (
				<>
					{contacts.map((contact, index) => {
						return <Card key={index} data={contact} />;
					})}
					{<GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />}
				</>
			) : (
				<LoadingPage />
			)}
		</div>
	);
}

export default App;
