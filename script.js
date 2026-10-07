// ================= SERVICE DATA =================

const services = {
    health: {
        title: "Healthcare | स्वास्थ्य",
        text: "Find information about primary healthcare, basic medical assistance and nearby health facilities.",
        link: "https://www.mohfw.gov.in/"
    },

    education: {
        title: "Education | शिक्षा",
        text: "Explore information about schools, scholarships, digital learning and educational resources.",
        link: "https://www.education.gov.in/"
    },

    agriculture: {
        title: "Agriculture | कृषि",
        text: "Farmers can explore information about agricultural support, schemes and useful resources.",
        link: "https://agriwelfare.gov.in/"
    },

    water: {
        title: "Water & Sanitation | जल एवं स्वच्छता",
        text: "Learn about safe drinking water, sanitation and cleanliness initiatives for rural communities.",
        link: "https://jaljeevanmission.gov.in/"
    },

    public: {
        title: "Public Services | सार्वजनिक सेवाएँ",
        text: "Access information about important government and citizen services through official portals.",
        link: "https://www.india.gov.in/"
    },

    business: {
        title: "Local Businesses | स्थानीय व्यवसाय",
        text: "Discover local shops, services and businesses that support the village economy.",
        link: "https://www.digitalindia.gov.in/"
    }
};


// ================= SCHEME DATA =================

const schemes = {
    pmkisan: {
        title: "PM-KISAN",
        text: "PM-KISAN provides income support to eligible farmer families according to the scheme's rules.",
        link: "https://pmkisan.gov.in/"
    },

    pmay: {
        title: "PMAY-G",
        text: "Pradhan Mantri Awaas Yojana-Gramin supports eligible rural households in getting pucca houses with basic amenities.",
        link: "https://pmayg.nic.in/"
    },

    jal: {
        title: "Jal Jeevan Mission",
        text: "Jal Jeevan Mission focuses on providing safe and adequate drinking water through household tap connections in rural areas.",
        link: "https://jaljeevanmission.gov.in/"
    },

    scholarship: {
        title: "National Scholarship Portal",
        text: "The National Scholarship Portal provides a digital platform for scholarship information and applications.",
        link: "https://scholarships.gov.in/"
    }
};


// ================= MODAL =================

function openModal(title, text, link) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;

    const modalLink = document.getElementById("modalLink");
    modalLink.href = link;

    document.getElementById("modal").classList.add("show");
}


function closeModal() {
    document.getElementById("modal").classList.remove("show");
}


window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        closeModal();
    }
});


// ================= SERVICES =================

function openService(serviceName) {

    const service = services[serviceName];

    if (!service) {
        return;
    }

    openModal(
        service.title,
        service.text,
        service.link
    );
}


// ================= SCHEMES =================

function openScheme(schemeName) {

    const scheme = schemes[schemeName];

    if (!scheme) {
        return;
    }

    openModal(
        scheme.title,
        scheme.text,
        scheme.link
    );
}


// ================= MAP =================

function showMapInfo(place) {

    const mapInfo = document.getElementById("mapInfo");

    const information = {
        "Government School":
            "🏫 Government School — Education facility for village students.",

        "Primary Health Centre":
            "🏥 Primary Health Centre — Basic healthcare and medical services.",

        "Village Market":
            "🛒 Village Market — Local shops, groceries and essential goods.",

        "Community Centre":
            "🏛️ Community Centre — A place for meetings, events and community activities."
    };

    mapInfo.textContent =
        information[place] || "Information unavailable.";
}


// ================= SEARCH =================

const searchItems = [
    {
        name: "Healthcare",
        keywords: "health hospital medical doctor स्वास्थ्य अस्पताल",
        section: "#services"
    },

    {
        name: "Education",
        keywords: "education school scholarship study शिक्षा विद्यालय छात्रवृत्ति",
        section: "#services"
    },

    {
        name: "Agriculture",
        keywords: "agriculture farmer farming crops कृषि किसान खेती",
        section: "#services"
    },

    {
        name: "Water & Sanitation",
        keywords: "water sanitation cleanliness जल स्वच्छता पानी",
        section: "#services"
    },

    {
        name: "Public Services",
        keywords: "government public services सरकारी सेवा",
        section: "#services"
    },

    {
        name: "Local Businesses",
        keywords: "shops market business दुकान बाजार व्यवसाय",
        section: "#services"
    },

    {
        name: "PM-KISAN",
        keywords: "pm kisan farmer किसान",
        section: "#schemes"
    },

    {
        name: "PMAY-G",
        keywords: "pmay house housing आवास घर",
        section: "#schemes"
    },

    {
        name: "Jal Jeevan Mission",
        keywords: "jal jeevan water drinking पानी जल",
        section: "#schemes"
    },

    {
        name: "National Scholarship Portal",
        keywords: "scholarship education छात्रवृत्ति शिक्षा",
        section: "#schemes"
    },

    {
        name: "Emergency",
        keywords: "emergency police medical ambulance आपातकाल पुलिस",
        section: "#emergency"
    }
];


const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");


searchInput.addEventListener("input", function() {

    const query = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (query === "") {
        return;
    }

    const matches = searchItems.filter(item => {
        return (
            item.name.toLowerCase().includes(query) ||
            item.keywords.toLowerCase().includes(query)
        );
    });


    if (matches.length === 0) {

        searchResults.innerHTML =
            '<div class="search-result">No matching service found.</div>';

        return;
    }


    matches.forEach(item => {

        const result = document.createElement("a");

        result.className = "search-result";
        result.href = item.section;
        result.textContent = "🔎 " + item.name;

        searchResults.appendChild(result);
    });

});


// ================= FEEDBACK =================

const feedbackForm = document.getElementById("feedbackForm");
const feedbackMessage = document.getElementById("feedbackMessage");


feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    feedbackMessage.textContent =
        "Thank you, " + name + "! Your feedback has been recorded for this demo.";

    feedbackForm.reset();

});


// ================= CURRENT YEAR =================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        "© " + new Date().getFullYear() +
        " Digital Village Portal | Made for Web Development Competition";

}
