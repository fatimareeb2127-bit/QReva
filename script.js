(() => {

  "use strict";


  const categoryMeta = {

    all: {
      name: "All"
    },

    personal: {
      name: "Personal"
    },

    events: {
      name: "Events"
    },

    social: {
      name: "Social"
    },

    professional: {
      name: "Professional"
    },

    business: {
      name: "Business"
    }

  };


  const blockNames = {

    hero: "🎨 Hero",

    profile: "👤 Profile",

    text: "📝 Text",

    photos: "📸 Photos",

    gallery: "🖼️ Gallery",

    video: "🎥 Video",

    music: "🎵 Music",

    sticker: "✨ Sticker",

    countdown: "⏳ Countdown",

    wishes: "💌 Wishes",

    rsvp: "💍 RSVP",

    location: "📍 Location",

    schedule: "🗓️ Schedule",

    social: "🔗 Social",

    contact: "☎️ Contact",

    portfolio: "💼 Portfolio",

    menu: "🍽️ Menu",

    review: "⭐ Review",

    link: "🔗 Link",

    form: "📋 Form"

  };


  const templates = [

    {
      id: "birthdayMemories",
      category: "personal",
      title: "Birthday Memories",
      description: "Photos, video, wishes and a beautiful birthday story.",
      icon: "🎂",
      primary: "#f43f5e",
      secondary: "#fb7185",
      blocks: [
        heroBlock("Happy Birthday!", "A beautiful collection of memories.", "Send a Wish"),
        textBlock("A Special Message", "Write your birthday message here."),
        photosBlock("Birthday Photos"),
        videoBlock("Birthday Video"),
        musicBlock("Your Birthday Song"),
        stickerBlock("🎂"),
        countdownBlock("The Celebration", futureDate())
      ]
    },

    {
      id: "birthdayCelebration",
      category: "personal",
      title: "Birthday Celebration",
      description: "Perfect for birthday parties and celebrations.",
      icon: "🎈",
      primary: "#8b5cf6",
      secondary: "#ec4899",
      blocks: [
        heroBlock("Let's Celebrate!", "Join us for a special celebration.", "View Details"),
        countdownBlock("Party Countdown", futureDate()),
        photosBlock("Memories"),
        wishesBlock("Birthday Wishes"),
        musicBlock("Party Music"),
        stickerBlock("🎈")
      ]
    },

    {
      id: "birthdaySurprise",
      category: "personal",
      title: "Birthday Surprise",
      description: "A colorful surprise page for someone special.",
      icon: "🎁",
      primary: "#f97316",
      secondary: "#eab308",
      blocks: [
        heroBlock("Surprise!", "Today is all about you.", "Open"),
        textBlock("A Message For You", "Write your personal birthday message."),
        galleryBlock("Special Memories"),
        videoBlock("Surprise Video"),
        stickerBlock("🎁")
      ]
    },


    {
      id: "loveLetter",
      category: "personal",
      title: "Love Letter",
      description: "Create a romantic digital love experience.",
      icon: "❤️",
      primary: "#e11d48",
      secondary: "#fb7185",
      blocks: [
        heroBlock("For Someone Special", "A little piece of my heart.", "Read My Letter"),
        textBlock("My Letter", "Write your love letter here."),
        galleryBlock("Our Memories"),
        musicBlock("Our Song"),
        stickerBlock("❤️")
      ]
    },

    {
      id: "loveStory",
      category: "personal",
      title: "Our Story",
      description: "Tell your story through photos and memories.",
      icon: "💞",
      primary: "#db2777",
      secondary: "#f472b6",
      blocks: [
        heroBlock("Our Story", "Every moment brought us here.", "Our Memories"),
        textBlock("How It Started", "Tell your story here."),
        photosBlock("Our Photos"),
        videoBlock("Our Video"),
        countdownBlock("Our Special Day", futureDate())
      ]
    },


    {
      id: "thankYouCard",
      category: "personal",
      title: "Thank You Card",
      description: "A personal thank you page.",
      icon: "🙏",
      primary: "#0f766e",
      secondary: "#14b8a6",
      blocks: [
        heroBlock("Thank You", "Your kindness means everything.", "Read Message"),
        textBlock("A Personal Thank You", "Write your message here."),
        photosBlock("Memories")
      ]
    },

    {
      id: "achievement",
      category: "personal",
      title: "Congratulations",
      description: "Celebrate an achievement or special moment.",
      icon: "🏆",
      primary: "#ca8a04",
      secondary: "#f59e0b",
      blocks: [
        heroBlock("Congratulations!", "A moment worth celebrating.", "Celebrate"),
        textBlock("The Achievement", "Write the achievement story here."),
        photosBlock("Celebration Photos"),
        stickerBlock("🏆")
      ]
    },


    {
      id: "weddingElegant",
      category: "events",
      title: "Elegant Wedding",
      description: "Elegant wedding invitation with RSVP and venue.",
      icon: "💍",
      primary: "#8b5e3c",
      secondary: "#c8a27b",
      blocks: [
        heroBlock("A & B", "We are getting married.", "RSVP"),
        textBlock("Our Wedding", "We would love to celebrate this day with you."),
        photosBlock("Couple Photos"),
        countdownBlock("Wedding Day", futureDate()),
        scheduleBlock(),
        locationBlock(),
        rsvpBlock(),
        stickerBlock("💍")
      ]
    },

    {
      id: "weddingModern",
      category: "events",
      title: "Modern Wedding",
      description: "Minimal modern wedding invitation.",
      icon: "🤍",
      primary: "#475569",
      secondary: "#94a3b8",
      blocks: [
        heroBlock("Alex & Sarah", "Save the date.", "RSVP"),
        photosBlock("Our Photos"),
        scheduleBlock(),
        locationBlock(),
        rsvpBlock()
      ]
    },

    {
      id: "weddingFloral",
      category: "events",
      title: "Floral Wedding",
      description: "Soft floral style invitation.",
      icon: "🌸",
      primary: "#be185d",
      secondary: "#f9a8d4",
      blocks: [
        heroBlock("Together Forever", "Join our wedding celebration.", "RSVP"),
        textBlock("A Note From Us", "We cannot wait to celebrate with you."),
        galleryBlock("Our Memories"),
        countdownBlock("The Big Day", futureDate()),
        locationBlock(),
        rsvpBlock()
      ]
    },


    {
      id: "partyInvitation",
      category: "events",
      title: "Party Invitation",
      description: "Fun invitation for birthday parties and events.",
      icon: "🎉",
      primary: "#7c3aed",
      secondary: "#06b6d4",
      blocks: [
        heroBlock("Party Time!", "You are invited.", "RSVP"),
        countdownBlock("Party Countdown", futureDate()),
        locationBlock(),
        rsvpBlock(),
        musicBlock("Party Music")
      ]
    },

    {
      id: "graduationStory",
      category: "events",
      title: "Graduation Story",
      description: "Share your graduation journey.",
      icon: "🎓",
      primary: "#2563eb",
      secondary: "#7c3aed",
      blocks: [
        heroBlock("I Did It!", "A new chapter begins.", "My Journey"),
        textBlock("My Journey", "Tell your graduation story here."),
        photosBlock("Graduation Photos"),
        videoBlock("Graduation Video"),
        wishesBlock("Leave a Wish"),
        stickerBlock("🎓")
      ]
    },

    {
      id: "graduationParty",
      category: "events",
      title: "Graduation Party",
      description: "Invitation page for a graduation celebration.",
      icon: "🎓",
      primary: "#4338ca",
      secondary: "#2563eb",
      blocks: [
        heroBlock("Graduation Party", "Come celebrate with me.", "RSVP"),
        countdownBlock("Celebration Countdown", futureDate()),
        locationBlock(),
        rsvpBlock(),
        photosBlock("Photos")
      ]
    },


    {
      id: "socialProfile",
      category: "social",
      title: "Social Profile",
      description: "Your personal social profile in one QR.",
      icon: "👤",
      primary: "#7c3aed",
      secondary: "#ec4899",
      blocks: [
        profileBlock(),
        textBlock("About Me", "Tell people about yourself."),
        socialBlock(),
        photosBlock("My Photos"),
        videoBlock("Featured Video"),
        linkBlock()
      ]
    },

    {
      id: "linkHub",
      category: "social",
      title: "Link Hub",
      description: "Put all your important links in one place.",
      icon: "🔗",
      primary: "#4f46e5",
      secondary: "#06b6d4",
      blocks: [
        profileBlock(),
        textBlock("Welcome", "Find everything here."),
        socialBlock(),
        linkBlock(),
        linkBlock()
      ]
    },

    {
      id: "creatorPage",
      category: "social",
      title: "Creator Page",
      description: "For creators, influencers and digital artists.",
      icon: "🎬",
      primary: "#9333ea",
      secondary: "#f43f5e",
      blocks: [
        profileBlock(),
        textBlock("Creator Bio", "Tell your audience who you are."),
        videoBlock("Featured Video"),
        photosBlock("Gallery"),
        socialBlock(),
        linkBlock()
      ]
    },


    {
      id: "businessCard",
      category: "professional",
      title: "Digital Business Card",
      description: "A modern digital business card.",
      icon: "💼",
      primary: "#111827",
      secondary: "#374151",
      blocks: [
        profileBlock(),
        textBlock("Professional Summary", "Write your professional introduction."),
        contactBlock(),
        socialBlock(),
        locationBlock(),
        linkBlock()
      ]
    },

    {
      id: "portfolio",
      category: "professional",
      title: "Portfolio",
      description: "Showcase your projects and skills.",
      icon: "🖥️",
      primary: "#2563eb",
      secondary: "#7c3aed",
      blocks: [
        profileBlock(),
        textBlock("About Me", "Introduce yourself."),
        portfolioBlock(),
        photosBlock("Project Gallery"),
        videoBlock("Featured Project"),
        socialBlock(),
        contactBlock()
      ]
    },

    {
      id: "cvProfile",
      category: "professional",
      title: "CV Profile",
      description: "Turn your CV into an interactive page.",
      icon: "📄",
      primary: "#334155",
      secondary: "#64748b",
      blocks: [
        profileBlock(),
        textBlock("Professional Summary", "Write your professional summary."),
        portfolioBlock(),
        contactBlock(),
        socialBlock()
      ]
    },


    {
      id: "restaurantMenu",
      category: "business",
      title: "Restaurant Menu",
      description: "Interactive digital menu for restaurants.",
      icon: "🍽️",
      primary: "#b45309",
      secondary: "#f59e0b",
      blocks: [
        heroBlock("Our Menu", "Fresh. Simple. Delicious.", "View Menu"),
        menuBlock(),
        photosBlock("Food Gallery"),
        locationBlock(),
        contactBlock(),
        reviewBlock()
      ]
    },

    {
      id: "productShowcase",
      category: "business",
      title: "Product Showcase",
      description: "Present products through a beautiful QR page.",
      icon: "📦",
      primary: "#2563eb",
      secondary: "#06b6d4",
      blocks: [
        heroBlock("Our Product", "Discover something special.", "Learn More"),
        photosBlock("Product Photos"),
        textBlock("Product Details", "Describe your product."),
        videoBlock("Product Video"),
        linkBlock(),
        reviewBlock()
      ]
    },

    {
      id: "businessProfile",
      category: "business",
      title: "Business Profile",
      description: "A digital presence for your business.",
      icon: "🏢",
      primary: "#0f766e",
      secondary: "#14b8a6",
      blocks: [
        heroBlock("Your Business", "Welcome to our world.", "Contact Us"),
        textBlock("About Our Business", "Tell customers about your business."),
        photosBlock("Business Photos"),
        contactBlock(),
        locationBlock(),
        reviewBlock(),
        socialBlock()
      ]
    },

    {
      id: "feedback",
      category: "business",
      title: "Feedback",
      description: "Collect feedback through a QR code.",
      icon: "⭐",
      primary: "#7c3aed",
      secondary: "#a855f7",
      blocks: [
        heroBlock("We Value Your Feedback", "Tell us about your experience.", "Give Feedback"),
        reviewBlock(),
        formBlock(),
        contactBlock()
      ]
    },

    {
      id: "promotion",
      category: "business",
      title: "Promotion",
      description: "Create a promotional landing page.",
      icon: "🔥",
      primary: "#dc2626",
      secondary: "#f97316",
      blocks: [
        heroBlock("Special Offer", "Limited time promotion.", "Claim Offer"),
        photosBlock("Product"),
        textBlock("Offer Details", "Write your promotion here."),
        countdownBlock("Offer Ends", futureDate()),
        linkBlock()
      ]
    }

  ];


  function futureDate() {

    const date = new Date();

    date.setDate(date.getDate() + 30);

    return date.toISOString().slice(0,16);

  }


  function uid() {

    return Math.random().toString(36).slice(2,10) + Date.now().toString(36);

  }


  function heroBlock(title, subtitle, buttonText) {

    return {
      id: uid(),
      type: "hero",
      title,
      subtitle,
      buttonText
    };

  }


  function textBlock(heading, body) {

    return {
      id: uid(),
      type: "text",
      heading,
      body
    };

  }


  function photosBlock(title) {

    return {
      id: uid(),
      type: "photos",
      title,
      images: []
    };

  }


  function galleryBlock(title) {

    return {
      id: uid(),
      type: "gallery",
      title,
      images: []
    };

  }


  function videoBlock(title) {

    return {
      id: uid(),
      type: "video",
      title,
      src: ""
    };

  }


  function musicBlock(title) {

    return {
      id: uid(),
      type: "music",
      title,
      src: "",
      autoplay: false,
      loop: true
    };

  }


  function stickerBlock(emoji) {

    return {
      id: uid(),
      type: "sticker",
      emoji,
      x: 82,
      y: 8,
      size: 54
    };

  }


  function countdownBlock(title, date) {

    return {
      id: uid(),
      type: "countdown",
      title,
      date
    };

  }


  function wishesBlock(title) {

    return {
      id: uid(),
      type: "wishes",
      title,
      placeholder: "Write your wish...",
      messages: []
    };

  }


  function rsvpBlock() {

    return {
      id: uid(),
      type: "rsvp",
      title: "RSVP",
      text: "Will you join us?"
    };

  }


  function locationBlock() {

    return {
      id: uid(),
      type: "location",
      title: "Location",
      address: "Add your venue address"
    };

  }


  function scheduleBlock() {

    return {
      id: uid(),
      type: "schedule",
      title: "Schedule",
      items: [
        {
          time: "05:00 PM",
          title: "Welcome"
        },
        {
          time: "06:00 PM",
          title: "Main Event"
        }
      ]
    };

  }


  function socialBlock() {

    return {
      id: uid(),
      type: "social",
      title: "Find Me",
      links: [
        {
          label: "Instagram",
          url: ""
        },
        {
          label: "Facebook",
          url: ""
        },
        {
          label: "YouTube",
          url: ""
        }
      ]
    };

  }


  function contactBlock() {

    return {
      id: uid(),
      type: "contact",
      title: "Contact",
      phone: "",
      email: "",
      website: ""
    };

  }


  function profileBlock() {

    return {
      id: uid(),
      type: "profile",
      name: "Your Name",
      role: "Your Role",
      bio: "Tell people about yourself.",
      photo: ""
    };

  }


  function portfolioBlock() {

    return {
      id: uid(),
      type: "portfolio",
      title: "My Work",
      items: [
        {
          title: "Project One",
          description: "Describe your project."
        },
        {
          title: "Project Two",
          description: "Describe your project."
        }
      ]
    };

  }


  function menuBlock() {

    return {
      id: uid(),
      type: "menu",
      title: "Our Menu",
      items: [
        {
          name: "Signature Dish",
          price: "1200",
          description: "A delicious house specialty."
        },
        {
          name: "Special Pasta",
          price: "950",
          description: "Fresh ingredients and rich flavor."
        }
      ]
    };

  }


  function reviewBlock() {

    return {
      id: uid(),
      type: "review",
      title: "Guest Feedback",
      prompt: "How was your experience?"
    };

  }


  function linkBlock() {

    return {
      id: uid(),
      type: "link",
      title: "Important Link",
      label: "Open Link",
      url: ""
    };

  }


  function formBlock() {

    return {
      id: uid(),
      type: "form",
      title: "Contact Form",
      fields: [
        "Name",
        "Email",
        "Message"
      ]
    };

  }


  let selectedCategory = "all";

  let currentTemplate = null;

  let state = null;

  let countdownTimer = null;

  let currentSlug = null;


  const $ = id => document.getElementById(id);


  function clone(value) {

    return JSON.parse(JSON.stringify(value));

  }


  function escapeHtml(value) {

    return String(value ?? "")
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");

  }


  function buildState(template) {

    return {
      templateId: template.id,
      templateTitle: template.title,
      blocks: clone(template.blocks),
      design: {
        primaryColor: template.primary,
        secondaryColor: template.secondary,
        backgroundColor: "#ffffff",
        textColor: "#171a27",
        font: "Inter",
        animation: "fade",
        radius: 20
      }
    };

  }


  function renderCategoryTabs() {

    const container = $("categoryTabs");

    container.innerHTML = Object.entries(categoryMeta)
      .map(([id,item]) => {

        return `
          <button
            class="categoryTab ${selectedCategory === id ? "active" : ""}"
            data-category="${id}"
          >
            ${item.name}
          </button>
        `;

      })
      .join("");

  }


  function renderTemplates() {

    const container = $("templateGrid");

    const filtered = selectedCategory === "all"
      ? templates
      : templates.filter(t => t.category === selectedCategory);

    container.innerHTML = filtered.map(template => {

      return `
        <article
          class="templateCard"
          data-template-id="${template.id}"
        >

          <div
            class="templatePreview"
            style="background:linear-gradient(135deg,${template.primary},${template.secondary})"
          >

            <div class="templateMiniWindow">

              <div
                class="miniTop"
                style="background:${template.primary}"
              >
                ${template.icon}
              </div>

              <div class="miniBody">
                <div class="miniLine"></div>
                <div class="miniLine short"></div>
                <div class="miniLine"></div>
              </div>

            </div>

          </div>

          <div class="templateInfo">

            <h3>${escapeHtml(template.title)}</h3>

            <p>
              ${escapeHtml(template.description)}
            </p>

            <div class="templateMeta">

              <span class="templateCategory">
                ${escapeHtml(categoryMeta[template.category]?.name || "Custom")}
              </span>

              <span class="useTemplate">
                Use Template →
              </span>

            </div>

          </div>

        </article>
      `;

    }).join("");

  }


  function openEditor(templateId) {

    const template = templates.find(t => t.id === templateId);

    if (!template) return;

    currentTemplate = template;

    state = buildState(template);

    currentSlug = null;

    $("editorTemplateName").textContent = template.title;

    populateBlockTypeSelect();

    renderEditor();

    applyDesign();

    renderPreview();

    $("editorModal").classList.remove("hidden");

    document.body.style.overflow = "hidden";

  }


  function openBlankEditor() {

    const blank = {

      id: "blank",

      title: "Blank Page",

      category: "personal",

      primary: "#6657f5",

      secondary: "#8b5cf6",

      blocks: [
        heroBlock("Your Page", "Start creating something beautiful.", "Explore")
      ]

    };

    currentTemplate = blank;

    state = buildState(blank);

    currentSlug = null;

    $("editorTemplateName").textContent = "Blank Page";

    populateBlockTypeSelect();

    renderEditor();

    applyDesign();

    renderPreview();

    $("editorModal").classList.remove("hidden");

    document.body.style.overflow = "hidden";

  }


  function closeEditor() {

    $("editorModal").classList.add("hidden");

    document.body.style.overflow = "";

  }


  function populateBlockTypeSelect() {

    const select = $("blockTypeSelect");

    const category = currentTemplate?.category;

    const allowed = {

      personal: [
        "hero",
        "text",
        "photos",
        "gallery",
        "video",
        "music",
        "sticker",
        "countdown",
        "wishes",
        "link"
      ],

      events: [
        "hero",
        "text",
        "photos",
        "gallery",
        "video",
        "music",
        "sticker",
        "countdown",
        "wishes",
        "rsvp",
        "location",
        "schedule",
        "link"
      ],

      social: [
        "profile",
        "hero",
        "text",
        "photos",
        "gallery",
        "video",
        "music",
        "social",
        "link",
        "contact"
      ],

      professional: [
        "profile",
        "hero",
        "text",
        "photos",
        "gallery",
        "video",
        "portfolio",
        "social",
        "contact",
        "location",
        "link"
      ],

      business: [
        "hero",
        "text",
        "photos",
        "gallery",
        "video",
        "menu",
        "location",
        "contact",
        "review",
        "social",
        "link",
        "form",
        "countdown"
      ]

    };

    const list = allowed[category] || Object.keys(blockNames);

    select.innerHTML = list.map(type => {

      return `
        <option value="${type}">
          ${blockNames[type]}
        </option>
      `;

    }).join("");

  }


  function renderEditor() {

    const container = $("blockEditor");

    $("sectionCount").textContent = state.blocks.length;

    container.innerHTML = state.blocks.map((block,index) => {

      return renderBlockEditor(block,index);

    }).join("");

  }


  function field(label, content) {

    return `
      <div class="field">
        <label>${label}</label>
        ${content}
      </div>
    `;

  }


  function inputFor(block,path,value,type="text") {

    return `
      <input
        type="${type}"
        value="${escapeHtml(value)}"
        data-block-id="${block.id}"
        data-path="${path}"
      >
    `;

  }


  function textareaFor(block,path,value) {

    return `
      <textarea
        data-block-id="${block.id}"
        data-path="${path}"
      >${escapeHtml(value)}</textarea>
    `;

  }


  function renderBlockEditor(block,index) {

    let fields = "";

    if (block.type === "hero") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Subtitle",
        textareaFor(block,"subtitle",block.subtitle)
      );

      fields += field(
        "Button",
        inputFor(block,"buttonText",block.buttonText)
      );

    }


    if (block.type === "text") {

      fields += field(
        "Heading",
        inputFor(block,"heading",block.heading)
      );

      fields += field(
        "Message",
        textareaFor(block,"body",block.body)
      );

    }


    if (block.type === "profile") {

      fields += field(
        "Name",
        inputFor(block,"name",block.name)
      );

      fields += field(
        "Role",
        inputFor(block,"role",block.role)
      );

      fields += field(
        "Bio",
        textareaFor(block,"bio",block.bio)
      );

      fields += field(
        "Profile Photo",
        `
        <input
          class="fileInput"
          type="file"
          accept="image/*"
          data-upload="profile"
          data-block-id="${block.id}"
        >
        `
      );

    }


    if (block.type === "photos" || block.type === "gallery") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Images",
        `
        <input
          class="fileInput"
          type="file"
          accept="image/*"
          multiple
          data-upload="images"
          data-block-id="${block.id}"
        >
        `
      );

      if (block.images?.length) {

        fields += `
          <div class="uploadCount">
            ${block.images.length} image(s) added
          </div>
        `;

      }

    }


    if (block.type === "video") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Video",
        `
        <input
          class="fileInput"
          type="file"
          accept="video/*"
          data-upload="video"
          data-block-id="${block.id}"
        >
        `
      );

    }


    if (block.type === "music") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Music",
        `
        <input
          class="fileInput"
          type="file"
          accept="audio/*"
          data-upload="music"
          data-block-id="${block.id}"
        >
        `
      );

      fields += `
        <label class="field">
          <label>Autoplay</label>
          <input
            type="checkbox"
            data-block-id="${block.id}"
            data-path="autoplay"
            ${block.autoplay ? "checked" : ""}
          >
        </label>
      `;

    }


    if (block.type === "sticker") {

      fields += field(
        "Sticker",
        `
        <select
          data-block-id="${block.id}"
          data-path="emoji"
        >
          ${[
            "🎈",
            "🎂",
            "🎁",
            "❤️",
            "💍",
            "✨",
            "⭐",
            "🌸",
            "🎓",
            "📸",
            "🔥",
            "🎉",
            "🏆"
          ].map(emoji => `
            <option
              value="${emoji}"
              ${block.emoji === emoji ? "selected" : ""}
            >
              ${emoji}
            </option>
          `).join("")}
        </select>
        `
      );

      fields += field(
        "Size",
        `
        <input
          type="range"
          min="20"
          max="100"
          value="${block.size}"
          data-block-id="${block.id}"
          data-path="size"
        >
        `
      );

      fields += field(
        "Horizontal Position",
        `
        <input
          type="range"
          min="0"
          max="95"
          value="${block.x}"
          data-block-id="${block.id}"
          data-path="x"
        >
        `
      );

      fields += field(
        "Vertical Position",
        `
        <input
          type="range"
          min="0"
          max="95"
          value="${block.y}"
          data-block-id="${block.id}"
          data-path="y"
        >
        `
      );

    }


    if (block.type === "countdown") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Date & Time",
        `
        <input
          type="datetime-local"
          value="${escapeHtml(block.date)}"
          data-block-id="${block.id}"
          data-path="date"
        >
        `
      );

    }


    if (block.type === "wishes") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Placeholder",
        inputFor(block,"placeholder",block.placeholder)
      );

    }


    if (block.type === "rsvp") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Message",
        textareaFor(block,"text",block.text)
      );

    }


    if (block.type === "location") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Address",
        textareaFor(block,"address",block.address)
      );

    }


    if (block.type === "schedule") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += block.items.map((item,itemIndex) => {

        return `
          <div class="nestedItem">

            ${field(
              "Time",
              inputFor(block,`items.${itemIndex}.time`,item.time)
            )}

            ${field(
              "Event",
              inputFor(block,`items.${itemIndex}.title`,item.title)
            )}

            <button
              class="addItemBtn removeNested"
              data-block-id="${block.id}"
              data-array="items"
              data-index="${itemIndex}"
            >
              Remove
            </button>

          </div>
        `;

      }).join("");

      fields += `
        <button
          class="addItemBtn"
          data-add-item="${block.id}"
          data-item-type="schedule"
        >
          + Add Schedule Item
        </button>
      `;

    }


    if (block.type === "social") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += block.links.map((item,itemIndex) => {

        return `
          <div class="nestedItem">

            ${field(
              "Label",
              inputFor(block,`links.${itemIndex}.label`,item.label)
            )}

            ${field(
              "URL",
              inputFor(block,`links.${itemIndex}.url`,item.url)
            )}

            <button
              class="addItemBtn removeNested"
              data-block-id="${block.id}"
              data-array="links"
              data-index="${itemIndex}"
            >
              Remove
            </button>

          </div>
        `;

      }).join("");

      fields += `
        <button
          class="addItemBtn"
          data-add-item="${block.id}"
          data-item-type="social"
        >
          + Add Social Link
        </button>
      `;

    }


    if (block.type === "contact") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Phone",
        inputFor(block,"phone",block.phone)
      );

      fields += field(
        "Email",
        inputFor(block,"email",block.email)
      );

      fields += field(
        "Website",
        inputFor(block,"website",block.website)
      );

    }


    if (block.type === "portfolio") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += block.items.map((item,itemIndex) => {

        return `
          <div class="nestedItem">

            ${field(
              "Project",
              inputFor(block,`items.${itemIndex}.title`,item.title)
            )}

            ${field(
              "Description",
              textareaFor(block,`items.${itemIndex}.description`,item.description)
            )}

            <button
              class="addItemBtn removeNested"
              data-block-id="${block.id}"
              data-array="items"
              data-index="${itemIndex}"
            >
              Remove
            </button>

          </div>
        `;

      }).join("");

      fields += `
        <button
          class="addItemBtn"
          data-add-item="${block.id}"
          data-item-type="portfolio"
        >
          + Add Project
        </button>
      `;

    }


    if (block.type === "menu") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += block.items.map((item,itemIndex) => {

        return `
          <div class="nestedItem">

            ${field(
              "Item",
              inputFor(block,`items.${itemIndex}.name`,item.name)
            )}

            ${field(
              "Price",
              inputFor(block,`items.${itemIndex}.price`,item.price)
            )}

            ${field(
              "Description",
              textareaFor(block,`items.${itemIndex}.description`,item.description)
            )}

            <button
              class="addItemBtn removeNested"
              data-block-id="${block.id}"
              data-array="items"
              data-index="${itemIndex}"
            >
              Remove
            </button>

          </div>
        `;

      }).join("");

      fields += `
        <button
          class="addItemBtn"
          data-add-item="${block.id}"
          data-item-type="menu"
        >
          + Add Menu Item
        </button>
      `;

    }


    if (block.type === "review") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Question",
        textareaFor(block,"prompt",block.prompt)
      );

    }


    if (block.type === "link") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

      fields += field(
        "Button Text",
        inputFor(block,"label",block.label)
      );

      fields += field(
        "URL",
        inputFor(block,"url",block.url)
      );

    }


    if (block.type === "form") {

      fields += field(
        "Title",
        inputFor(block,"title",block.title)
      );

    }


    return `
      <div class="blockCard">

        <div class="blockHeader">

          <div class="blockType">
            ${blockNames[block.type] || block.type}
          </div>

          <div class="blockActions">

            <button
              title="Move Up"
              data-move="up"
              data-block-id="${block.id}"
            >
              ↑
            </button>

            <button
              title="Move Down"
              data-move="down"
              data-block-id="${block.id}"
            >
              ↓
            </button>

            <button
              title="Duplicate"
              data-duplicate="${block.id}"
            >
              ⧉
            </button>

            <button
              title="Delete"
              data-delete="${block.id}"
            >
              ×
            </button>

          </div>

        </div>

        ${fields}

      </div>
    `;

  }


  function getBlock(id) {

    return state.blocks.find(block => block.id === id);

  }


  function getPath(object,path) {

    return path.split(".").reduce((current,key) => {

      return current?.[key];

    },object);

  }


  function setPath(object,path,value) {

    const parts = path.split(".");

    let current = object;

    for (let i = 0; i < parts.length - 1; i++) {

      current = current[parts[i]];

    }

    current[parts[parts.length - 1]] = value;

  }


  function convertValue(element) {

    if (element.type === "checkbox") {

      return element.checked;

    }

    if (element.type === "range") {

      return Number(element.value);

    }

    return element.value;

  }


  function renderPreview() {

    if (!state) return;

    const preview = $("livePreview");

    applyDesign();

    preview.innerHTML = `
      <div class="previewPage">
        ${state.blocks.map(renderPreviewBlock).join("")}
      </div>
    `;

    attachPreviewInteractions();

    startCountdownTimer();

  }


  function renderPreviewBlock(block) {

    const animation = state.design.animation === "none"
      ? ""
      : state.design.animation;

    const animationClass = animation
      ? ` ${animation}`
      : "";

    const wrapper = content => {

      return `
        <section class="previewBlock${animationClass}">
          ${content}
        </section>
      `;

    };


    if (block.type === "hero") {

      return `
        <section class="previewHero">

          <h1>
            ${escapeHtml(block.title)}
          </h1>

          <p>
            ${escapeHtml(block.subtitle)}
          </p>

          <span class="previewButton">
            ${escapeHtml(block.buttonText)}
          </span>

        </section>
      `;

    }


    if (block.type === "profile") {

      return wrapper(`
        <div class="previewProfile">

          ${
            block.photo
              ? `
                <img
                  class="profilePhoto"
                  src="${block.photo}"
                  alt=""
                >
              `
              : `
                <div class="profilePlaceholder">
                  ${escapeHtml((block.name || "Q").charAt(0).toUpperCase())}
                </div>
              `
          }

          <h2 class="previewHeading">
            ${escapeHtml(block.name)}
          </h2>

          <div class="profileRole">
            ${escapeHtml(block.role)}
          </div>

          <p class="previewText" style="margin-top:12px">
            ${escapeHtml(block.bio)}
          </p>

        </div>
      `);

    }


    if (block.type === "text") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.heading)}
        </h2>

        <p class="previewText">
          ${escapeHtml(block.body)}
        </p>
      `);

    }


    if (block.type === "photos" || block.type === "gallery") {

      const images = block.images || [];

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        ${
          images.length
            ? `
              <div class="previewImages">
                ${images.map(src => `
                  <img src="${src}" alt="">
                `).join("")}
              </div>
            `
            : `
              <div class="placeholderMedia">
                📸 Add your photos
              </div>
            `
        }
      `);

    }


    if (block.type === "video") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        ${
          block.src
            ? `
              <video
                class="previewVideo"
                controls
                playsinline
                src="${block.src}"
              ></video>
            `
            : `
              <div class="placeholderMedia">
                🎥 Add a video
              </div>
            `
        }
      `);

    }


    if (block.type === "music") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        ${
          block.src
            ? `
              <audio
                class="previewAudio"
                controls
                ${block.autoplay ? "autoplay" : ""}
                ${block.loop ? "loop" : ""}
                src="${block.src}"
              ></audio>
            `
            : `
              <div class="placeholderMedia">
                🎵 Add music
              </div>
            `
        }
      `);

    }


    if (block.type === "sticker") {

      return `
        <div
          class="previewSticker"
          data-sticker-id="${block.id}"
          style="
            left:${block.x}%;
            top:${block.y}%;
            font-size:${block.size}px;
          "
        >
          ${escapeHtml(block.emoji)}
        </div>
      `;

    }


    if (block.type === "countdown") {

      return wrapper(`
        <div class="countdownBox">

          <strong>
            ${escapeHtml(block.title)}
          </strong>

          <div
            class="countdownNumbers"
            data-countdown="${block.id}"
          >
            <div>
              <strong>00</strong>
              <span>Days</span>
            </div>

            <div>
              <strong>00</strong>
              <span>Hours</span>
            </div>

            <div>
              <strong>00</strong>
              <span>Minutes</span>
            </div>

            <div>
              <strong>00</strong>
              <span>Seconds</span>
            </div>
          </div>

        </div>
      `);

    }


    if (block.type === "wishes") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        <div class="previewForm">

          <textarea
            placeholder="${escapeHtml(block.placeholder)}"
            data-wish-input="${block.id}"
          ></textarea>

          <button
            class="previewLink"
            data-wish-submit="${block.id}"
          >
            Send Wish
          </button>

        </div>
      `);

    }


    if (block.type === "rsvp") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        <p class="previewText">
          ${escapeHtml(block.text)}
        </p>

        <div
          class="previewRsvp"
          style="margin-top:12px"
        >

          <input
            type="text"
            placeholder="Your Name"
            data-rsvp-name
          >

          <button
            class="previewLink"
            data-rsvp-submit
          >
            Confirm Attendance
          </button>

          <div
            class="rsvpMessage"
            data-rsvp-message
          ></div>

        </div>
      `);

    }


    if (block.type === "location") {

      const mapUrl =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(block.address || "");

      return wrapper(`
        <div class="locationBox">

          <h2 class="previewHeading">
            ${escapeHtml(block.title)}
          </h2>

          <p>
            ${escapeHtml(block.address)}
          </p>

          <a
            class="previewLink"
            style="margin-top:12px"
            href="${mapUrl}"
            target="_blank"
            rel="noopener"
          >
            Open Map
          </a>

        </div>
      `);

    }


    if (block.type === "schedule") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        ${
          block.items.map(item => `
            <div class="previewScheduleItem">

              <div class="scheduleTime">
                ${escapeHtml(item.time)}
              </div>

              <strong>
                ${escapeHtml(item.title)}
              </strong>

            </div>
          `).join("")
        }
      `);

    }


    if (block.type === "social") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        <div class="socialLinks">

          ${
            block.links.map(link => {

              if (!link.url) {

                return `
                  <div class="previewLink">
                    ${escapeHtml(link.label)}
                  </div>
                `;

              }

              return `
                <a
                  class="previewLink"
                  href="${escapeHtml(link.url)}"
                  target="_blank"
                  rel="noopener"
                >
                  ${escapeHtml(link.label)}
                </a>
              `;

            }).join("")
          }

        </div>
      `);

    }


    if (block.type === "contact") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        <div class="socialLinks">

          ${
            block.phone
              ? `
                <a
                  class="previewLink"
                  href="tel:${escapeHtml(block.phone)}"
                >
                  ☎️ ${escapeHtml(block.phone)}
                </a>
              `
              : ""
          }

          ${
            block.email
              ? `
                <a
                  class="previewLink"
                  href="mailto:${escapeHtml(block.email)}"
                >
                  ✉️ ${escapeHtml(block.email)}
                </a>
              `
              : ""
          }

          ${
            block.website
              ? `
                <a
                  class="previewLink"
                  href="${escapeHtml(block.website)}"
                  target="_blank"
                  rel="noopener"
                >
                  🌐 Website
                </a>
              `
              : ""
          }

        </div>
      `);

    }


    if (block.type === "portfolio") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        ${
          block.items.map(item => `
            <div class="portfolioItem">

              <strong>
                ${escapeHtml(item.title)}
              </strong>

              <p class="itemDescription">
                ${escapeHtml(item.description)}
              </p>

            </div>
          `).join("")
        }
      `);

    }


    if (block.type === "menu") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        ${
          block.items.map(item => `
            <div class="menuItem">

              <div class="menuRow">

                <strong>
                  ${escapeHtml(item.name)}
                </strong>

                <span class="menuPrice">
                  ${escapeHtml(item.price)}
                </span>

              </div>

              <p class="itemDescription">
                ${escapeHtml(item.description)}
              </p>

            </div>
          `).join("")
        }
      `);

    }


    if (block.type === "review") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        <p class="previewText">
          ${escapeHtml(block.prompt)}
        </p>

        <div class="previewForm" style="margin-top:12px">

          <select>
            <option>★★★★★ Excellent</option>
            <option>★★★★☆ Good</option>
            <option>★★★☆☆ Average</option>
            <option>★★☆☆☆ Poor</option>
          </select>

          <textarea placeholder="Write your feedback"></textarea>

          <button class="previewLink">
            Submit Feedback
          </button>

        </div>
      `);

    }


    if (block.type === "link") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        ${
          block.url
            ? `
              <a
                class="previewLink"
                href="${escapeHtml(block.url)}"
                target="_blank"
                rel="noopener"
              >
                ${escapeHtml(block.label)}
              </a>
            `
            : `
              <div class="previewLink">
                ${escapeHtml(block.label)}
              </div>
            `
        }
      `);

    }


    if (block.type === "form") {

      return wrapper(`
        <h2 class="previewHeading">
          ${escapeHtml(block.title)}
        </h2>

        <div class="previewForm">

          <input placeholder="Name">

          <input placeholder="Email">

          <textarea placeholder="Message"></textarea>

          <button class="previewLink">
            Send
          </button>

        </div>
      `);

    }


    return "";

  }


  function applyDesign() {

    if (!state) return;

    const preview = $("livePreview");

    preview.style.setProperty(
      "--page-primary",
      state.design.primaryColor
    );

    preview.style.setProperty(
      "--page-secondary",
      state.design.secondaryColor
    );

    preview.style.setProperty(
      "--page-bg",
      state.design.backgroundColor
    );

    preview.style.setProperty(
      "--page-text",
      state.design.textColor
    );

    preview.style.setProperty(
      "--page-font",
      state.design.font
    );

    preview.style.setProperty(
      "--page-radius",
      `${state.design.radius}px`
    );

    preview.style.background = state.design.backgroundColor;

    $("primaryColor").value = state.design.primaryColor;

    $("secondaryColor").value = state.design.secondaryColor;

    $("backgroundColor").value = state.design.backgroundColor;

    $("textColor").value = state.design.textColor;

    $("fontSelect").value = state.design.font;

    $("animationSelect").value = state.design.animation;

    $("radiusRange").value = state.design.radius;

  }


  function startCountdownTimer() {

    clearInterval(countdownTimer);

    function update() {

      if (!state) return;

      document.querySelectorAll("[data-countdown]").forEach(element => {

        const id = element.dataset.countdown;

        const block = getBlock(id);

        if (!block) return;

        const target = new Date(block.date).getTime();

        const now = Date.now();

        let difference = target - now;

        if (difference < 0) {

          difference = 0;

        }

        const seconds = Math.floor(difference / 1000);

        const days = Math.floor(seconds / 86400);

        const hours = Math.floor((seconds % 86400) / 3600);

        const minutes = Math.floor((seconds % 3600) / 60);

        const secs = seconds % 60;

        const values = [
          days,
          hours,
          minutes,
          secs
        ];

        element.querySelectorAll("div").forEach((box,index) => {

          const strong = box.querySelector("strong");

          if (strong) {

            strong.textContent =
              String(values[index]).padStart(2,"0");

          }

        });

      });

    }

    update();

    countdownTimer = setInterval(update,1000);

  }


  function attachPreviewInteractions() {

    document.querySelectorAll("[data-sticker-id]").forEach(sticker => {

      let dragging = false;

      const move = event => {

        if (!dragging) return;

        const rect = $("livePreview").getBoundingClientRect();

        const clientX =
          event.touches?.[0]?.clientX ?? event.clientX;

        const clientY =
          event.touches?.[0]?.clientY ?? event.clientY;

        let x =
          ((clientX - rect.left) / rect.width) * 100;

        let y =
          ((clientY - rect.top) / rect.height) * 100;

        x = Math.max(0,Math.min(95,x));

        y = Math.max(0,Math.min(95,y));

        sticker.style.left = `${x}%`;

        sticker.style.top = `${y}%`;

        const block = getBlock(sticker.dataset.stickerId);

        if (block) {

          block.x = x;

          block.y = y;

        }

      };


      const stop = () => {

        dragging = false;

        document.removeEventListener("pointermove",move);

        document.removeEventListener("pointerup",stop);

      };


      sticker.addEventListener("pointerdown",event => {

        dragging = true;

        sticker.setPointerCapture?.(event.pointerId);

        document.addEventListener("pointermove",move);

        document.addEventListener("pointerup",stop);

      });

    });


    document.querySelectorAll("[data-wish-submit]").forEach(button => {

      button.addEventListener("click",() => {

        const id = button.dataset.wishSubmit;

        const block = getBlock(id);

        const input =
          document.querySelector(`[data-wish-input="${id}"]`);

        if (!input || !block) return;

        const value = input.value.trim();

        if (!value) {

          showToast("Write a wish first.");

          return;

        }

        block.messages = block.messages || [];

        block.messages.push(value);

        input.value = "";

        showToast("Wish added.");

      });

    });


    document.querySelectorAll("[data-rsvp-submit]").forEach(button => {

      button.addEventListener("click",() => {

        const input =
          document.querySelector("[data-rsvp-name]");

        const message =
          document.querySelector("[data-rsvp-message]");

        if (!input.value.trim()) {

          message.textContent = "Please enter your name.";

          return;

        }

        message.textContent =
          `Thank you, ${input.value.trim()}! Your RSVP is recorded.`;

      });

    });

  }


  function updateBlockFromInput(element) {

    const block = getBlock(element.dataset.blockId);

    if (!block) return;

    const value = convertValue(element);

    setPath(
      block,
      element.dataset.path,
      value
    );

    renderPreview();

  }


  async function handleUpload(element) {

    const file = element.files?.[0];

    if (!file) return;

    const block = getBlock(element.dataset.blockId);

    if (!block) return;


    if (
      element.dataset.upload === "profile" ||
      element.dataset.upload === "images"
    ) {

      if (element.dataset.upload === "profile") {

        const data = await fileToDataUrl(file);

        block.photo = data;

      } else {

        const files = Array.from(element.files);

        const data = await Promise.all(
          files.map(fileToDataUrl)
        );

        block.images = [
          ...(block.images || []),
          ...data
        ];

      }

      renderEditor();

      renderPreview();

      showToast("Image added.");

      return;

    }


    if (element.dataset.upload === "video") {

      block.src = URL.createObjectURL(file);

      renderPreview();

      showToast("Video added.");

      return;

    }


    if (element.dataset.upload === "music") {

      block.src = URL.createObjectURL(file);

      renderPreview();

      showToast("Music added.");

    }

  }


  function fileToDataUrl(file) {

    return new Promise((resolve,reject) => {

      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);

      reader.onerror = reject;

      reader.readAsDataURL(file);

    });

  }


  function addBlock(type) {

    const factories = {

      hero: () => heroBlock(
        "Your Title",
        "Write something beautiful.",
        "Explore"
      ),

      profile: () => profileBlock(),

      text: () => textBlock(
        "Your Heading",
        "Write your content here."
      ),

      photos: () => photosBlock("Photos"),

      gallery: () => galleryBlock("Gallery"),

      video: () => videoBlock("Video"),

      music: () => musicBlock("Music"),

      sticker: () => stickerBlock("✨"),

      countdown: () => countdownBlock(
        "Countdown",
        futureDate()
      ),

      wishes: () => wishesBlock("Wishes"),

      rsvp: () => rsvpBlock(),

      location: () => locationBlock(),

      schedule: () => scheduleBlock(),

      social: () => socialBlock(),

      contact: () => contactBlock(),

      portfolio: () => portfolioBlock(),

      menu: () => menuBlock(),

      review: () => reviewBlock(),

      link: () => linkBlock(),

      form: () => formBlock()

    };

    const factory = factories[type];

    if (!factory) return;

    state.blocks.push(factory());

    renderEditor();

    renderPreview();

    showToast(`${blockNames[type]} added.`);

  }


  function addNestedItem(blockId,type) {

    const block = getBlock(blockId);

    if (!block) return;


    if (type === "schedule") {

      block.items.push({
        time: "07:00 PM",
        title: "New Event"
      });

    }


    if (type === "social") {

      block.links.push({
        label: "New Link",
        url: ""
      });

    }


    if (type === "portfolio") {

      block.items.push({
        title: "New Project",
        description: "Describe this project."
      });

    }


    if (type === "menu") {

      block.items.push({
        name: "New Dish",
        price: "0",
        description: "Dish description."
      });

    }


    renderEditor();

    renderPreview();

  }


  function removeNestedItem(button) {

    const block = getBlock(button.dataset.blockId);

    if (!block) return;

    const array = block[button.dataset.array];

    if (!Array.isArray(array)) return;

    array.splice(
      Number(button.dataset.index),
      1
    );

    renderEditor();

    renderPreview();

  }


  function moveBlock(id,direction) {

    const index =
      state.blocks.findIndex(block => block.id === id);

    if (index < 0) return;

    const newIndex =
      direction === "up"
        ? index - 1
        : index + 1;

    if (
      newIndex < 0 ||
      newIndex >= state.blocks.length
    ) return;

    [
      state.blocks[index],
      state.blocks[newIndex]
    ] = [
      state.blocks[newIndex],
      state.blocks[index]
    ];

    renderEditor();

    renderPreview();

  }


  function deleteBlock(id) {

    if (state.blocks.length <= 1) {

      showToast("Keep at least one section.");

      return;

    }

    state.blocks =
      state.blocks.filter(block => block.id !== id);

    renderEditor();

    renderPreview();

    showToast("Section removed.");

  }


  function duplicateBlock(id) {

    const index =
      state.blocks.findIndex(block => block.id === id);

    if (index < 0) return;

    const duplicate = clone(state.blocks[index]);

    duplicate.id = uid();

    state.blocks.splice(
      index + 1,
      0,
      duplicate
    );

    renderEditor();

    renderPreview();

    showToast("Section duplicated.");

  }


  function saveProject() {

    if (!state) return;

    localStorage.setItem(
      "qrevaProject",
      JSON.stringify(state)
    );

    showToast("Project saved on this device.");

  }


  function publishProject() {

    if (!state) return null;

    if (!currentSlug) {

      currentSlug =
        "page-" +
        Date.now().toString(36);

    }

    localStorage.setItem(
      `qrevaPage_${currentSlug}`,
      JSON.stringify(state)
    );

    return currentSlug;

  }


  function getPageUrl(slug) {

    return (
      window.location.origin +
      window.location.pathname +
      "#q=" +
      slug
    );

  }


  function generateQr() {

    const slug = publishProject();

    if (!slug) return;

    const url = getPageUrl(slug);

    $("qrCanvas").innerHTML = "";

    new QRCode(
      $("qrCanvas"),
      {
        text: url,
        width: 220,
        height: 220,
        correctLevel: QRCode.CorrectLevel.H
      }
    );

    $("qrUrl").textContent = url;

    $("qrModal").classList.remove("hidden");

    showToast("QR code generated.");

  }


  function downloadQr() {

    const container = $("qrCanvas");

    const canvas = container.querySelector("canvas");

    const image = container.querySelector("img");

    let url = "";

    if (canvas) {

      url = canvas.toDataURL("image/png");

    } else if (image) {

      url = image.src;

    }

    if (!url) {

      showToast("QR is not ready.");

      return;

    }

    const link = document.createElement("a");

    link.href = url;

    link.download = "qreva-qr.png";

    document.body.appendChild(link);

    link.click();

    link.remove();

  }


  async function copyQrLink() {

    const url = $("qrUrl").textContent;

    try {

      await navigator.clipboard.writeText(url);

      showToast("Link copied.");

    } catch {

      showToast("Copy is not available in this browser.");

    }

  }


  function showToast(message) {

    const toast = $("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer =
      setTimeout(() => {
        toast.classList.remove("show");
      },2500);

  }


  function openPublicPage(slug) {

    const raw =
      localStorage.getItem(`qrevaPage_${slug}`);

    if (!raw) {

      showPublicNotFound();

      return;

    }

    try {

      const publicState = JSON.parse(raw);

      renderPublicPage(publicState);

    } catch {

      showPublicNotFound();

    }

  }


  function renderPublicPage(publicState) {

    document.querySelector(".siteShell").style.display =
      "none";

    const existing =
      document.getElementById("publicPage");

    if (existing) existing.remove();

    const wrapper =
      document.createElement("div");

    wrapper.id = "publicPage";

    wrapper.className = "publicPage";

    wrapper.style.minHeight = "100vh";

    wrapper.style.background =
      publicState.design.backgroundColor;

    wrapper.style.color =
      publicState.design.textColor;

    wrapper.style.fontFamily =
      publicState.design.font;

    wrapper.style.setProperty(
      "--page-primary",
      publicState.design.primaryColor
    );

    wrapper.style.setProperty(
      "--page-secondary",
      publicState.design.secondaryColor
    );

    wrapper.style.setProperty(
      "--page-bg",
      publicState.design.backgroundColor
    );

    wrapper.style.setProperty(
      "--page-text",
      publicState.design.textColor
    );

    wrapper.innerHTML = `

      <div style="
        max-width:700px;
        margin:auto;
        min-height:100vh;
        background:${escapeHtml(publicState.design.backgroundColor)};
      ">

        <div
          id="publicContent"
          class="livePreview"
        ></div>

      </div>

    `;

    document.body.appendChild(wrapper);

    const preview =
      wrapper.querySelector("#publicContent");

    preview.style.setProperty(
      "--page-primary",
      publicState.design.primaryColor
    );

    preview.style.setProperty(
      "--page-secondary",
      publicState.design.secondaryColor
    );

    preview.style.setProperty(
      "--page-bg",
      publicState.design.backgroundColor
    );

    preview.style.setProperty(
      "--page-text",
      publicState.design.textColor
    );

    preview.style.setProperty(
      "--page-font",
      publicState.design.font
    );

    preview.innerHTML = `
      <div class="previewPage">
        ${publicState.blocks.map(block => renderPublicBlock(block,publicState)).join("")}
      </div>
    `;

    startPublicCountdowns(publicState);

  }


  function renderPublicBlock(block,publicState) {

    const oldState = state;

    state = publicState;

    const html = renderPreviewBlock(block);

    state = oldState;

    return html;

  }


  function startPublicCountdowns(publicState) {

    setInterval(() => {

      document.querySelectorAll(
        "#publicPage [data-countdown]"
      ).forEach(element => {

        const id = element.dataset.countdown;

        const block =
          publicState.blocks.find(
            item => item.id === id
          );

        if (!block) return;

        const target =
          new Date(block.date).getTime();

        let difference =
          Math.max(0,target - Date.now());

        const total =
          Math.floor(difference / 1000);

        const values = [
          Math.floor(total / 86400),
          Math.floor((total % 86400) / 3600),
          Math.floor((total % 3600) / 60),
          total % 60
        ];

        element.querySelectorAll("strong")
          .forEach((strong,index) => {

            strong.textContent =
              String(values[index]).padStart(2,"0");

          });

      });

    },1000);

  }


  function showPublicNotFound() {

    document.querySelector(".siteShell").style.display =
      "none";

    const wrapper =
      document.createElement("div");

    wrapper.id = "publicPage";

    wrapper.style.minHeight = "100vh";

    wrapper.style.display = "grid";

    wrapper.style.placeItems = "center";

    wrapper.style.fontFamily = "Arial";

    wrapper.innerHTML = `
      <div style="
        text-align:center;
        padding:30px;
      ">

        <div style="
          font-size:70px;
          margin-bottom:15px;
        ">
          404
        </div>

        <h1>QReva page not found</h1>

        <p style="
          color:#777;
          margin-top:10px;
        ">
          This page does not exist on this device.
        </p>

      </div>
    `;

    document.body.appendChild(wrapper);

  }


  function loadSavedProject() {

    const raw =
      localStorage.getItem("qrevaProject");

    if (!raw) {

      showToast("No saved project found.");

      return;

    }

    try {

      state = JSON.parse(raw);

      const template =
        templates.find(
          item => item.id === state.templateId
        );

      currentTemplate =
        template || {
          id: state.templateId,
          title: state.templateTitle,
          category: "personal"
        };

      $("editorTemplateName").textContent =
        state.templateTitle || "Saved Project";

      populateBlockTypeSelect();

      renderEditor();

      applyDesign();

      renderPreview();

      $("editorModal").classList.remove("hidden");

      document.body.style.overflow = "hidden";

      showToast("Saved project loaded.");

    } catch {

      showToast("Saved project could not be loaded.");

    }

  }


  function setupEvents() {

    $("categoryTabs").addEventListener("click",event => {

      const button =
        event.target.closest("[data-category]");

      if (!button) return;

      selectedCategory =
        button.dataset.category;

      renderCategoryTabs();

      renderTemplates();

    });


    $("templateGrid").addEventListener("click",event => {

      const card =
        event.target.closest("[data-template-id]");

      if (!card) return;

      openEditor(card.dataset.templateId);

    });


    $("navCreateBtn").addEventListener(
      "click",
      () => $("templates").scrollIntoView({
        behavior:"smooth"
      })
    );


    $("heroCreateBtn").addEventListener(
      "click",
      () => $("templates").scrollIntoView({
        behavior:"smooth"
      })
    );


    $("finalCreateBtn").addEventListener(
      "click",
      () => $("templates").scrollIntoView({
        behavior:"smooth"
      })
    );


    $("blankTemplateBtn").addEventListener(
      "click",
      openBlankEditor
    );


    $("closeEditor").addEventListener(
      "click",
      closeEditor
    );


    $("generateQrBtn").addEventListener(
      "click",
      generateQr
    );


    $("saveProjectBtn").addEventListener(
      "click",
      saveProject
    );


    $("previewPageBtn").addEventListener(
      "click",
      () => {

        const slug =
          publishProject();

        if (!slug) return;

        window.open(
          getPageUrl(slug),
          "_blank"
        );

      }
    );


    $("closeQr").addEventListener(
      "click",
      () => $("qrModal").classList.add("hidden")
    );


    $("downloadQrBtn").addEventListener(
      "click",
      downloadQr
    );


    $("copyQrLinkBtn").addEventListener(
      "click",
      copyQrLink
    );


    $("addBlockBtn").addEventListener(
      "click",
      () => {

        addBlock(
          $("blockTypeSelect").value
        );

      }
    );


    $("blockEditor").addEventListener(
      "input",
      event => {

        const element =
          event.target.closest("[data-block-id][data-path]");

        if (!element) return;

        updateBlockFromInput(element);

      }
    );


    $("blockEditor").addEventListener(
      "change",
      async event => {

        const upload =
          event.target.closest("[data-upload]");

        if (upload) {

          await handleUpload(upload);

          return;

        }

        const element =
          event.target.closest("[data-block-id][data-path]");

        if (element) {

          updateBlockFromInput(element);

        }

      }
    );


    $("blockEditor").addEventListener(
      "click",
      event => {

        const move =
          event.target.closest("[data-move]");

        if (move) {

          moveBlock(
            move.dataset.blockId,
            move.dataset.move
          );

          return;

        }


        const deleteButton =
          event.target.closest("[data-delete]");

        if (deleteButton) {

          deleteBlock(
            deleteButton.dataset.delete
          );

          return;

        }


        const duplicate =
          event.target.closest("[data-duplicate]");

        if (duplicate) {

          duplicateBlock(
            duplicate.dataset.duplicate
          );

          return;

        }


        const addItem =
          event.target.closest("[data-add-item]");

        if (addItem) {

          addNestedItem(
            addItem.dataset.addItem,
            addItem.dataset.itemType
          );

          return;

        }


        const removeNested =
          event.target.closest(".removeNested");

        if (removeNested) {

          removeNestedItem(removeNested);

        }

      }
    );


    $("primaryColor").addEventListener(
      "input",
      event => {

        state.design.primaryColor =
          event.target.value;

        renderPreview();

      }
    );


    $("secondaryColor").addEventListener(
      "input",
      event => {

        state.design.secondaryColor =
          event.target.value;

        renderPreview();

      }
    );


    $("backgroundColor").addEventListener(
      "input",
      event => {

        state.design.backgroundColor =
          event.target.value;

        renderPreview();

      }
    );


    $("textColor").addEventListener(
      "input",
      event => {

        state.design.textColor =
          event.target.value;

        renderPreview();

      }
    );


    $("fontSelect").addEventListener(
      "change",
      event => {

        state.design.font =
          event.target.value;

        renderPreview();

      }
    );


    $("animationSelect").addEventListener(
      "change",
      event => {

        state.design.animation =
          event.target.value;

        renderPreview();

      }
    );


    $("radiusRange").addEventListener(
      "input",
      event => {

        state.design.radius =
          Number(event.target.value);

        renderPreview();

      }
    );


    document.querySelectorAll(".deviceBtn").forEach(button => {

      button.addEventListener("click",() => {

        document.querySelectorAll(".deviceBtn")
          .forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        if (button.dataset.device === "tablet") {

          $("deviceFrame").classList.add("tablet");

        } else {

          $("deviceFrame").classList.remove("tablet");

        }

      });

    });


    $("mobileMenuBtn").addEventListener(
      "click",
      () => {

        $("mobileMenu").classList.toggle("open");

      }
    );


    $("mobileCreateBtn").addEventListener(
      "click",
      () => {

        $("mobileMenu").classList.remove("open");

        $("templates").scrollIntoView({
          behavior:"smooth"
        });

      }
    );


    document.addEventListener("keydown",event => {

      if (event.key === "Escape") {

        if (!$("qrModal").classList.contains("hidden")) {

          $("qrModal").classList.add("hidden");

          return;

        }

        if (!$("editorModal").classList.contains("hidden")) {

          closeEditor();

        }

      }

    });

  }


  function init() {

    renderCategoryTabs();

    renderTemplates();

    setupEvents();

    const hash =
      window.location.hash;

    if (hash.startsWith("#q=")) {

      const slug =
        decodeURIComponent(
          hash.substring(3)
        );

      openPublicPage(slug);

    }

  }


  init();

})();