document.addEventListener('DOMContentLoaded', () => {
    const coursesData = [
        {
            "id": "jee101",
            "title": "JEE Main 2026: Mock Test Series",
            "instructor": "eVidhyalaya Experts",
            "duration": "Self-Paced", // Handle this
            "imageUrl": "https://placehold.co/300x150?text=JEE+Main+2026+Mocks",
            "description": "Comprehensive mock tests based on the NTA reduced syllabus for Class 11 & 12. Includes 30 topic-wise tests."
        },
        {
            "id": "neet201",
            "title": "NEET 2026: Ultimate Score Booster Pack",
            "instructor": "Top Medical Faculty",
            "duration": "12 Weeks",
            "imageUrl": "https://placehold.co/300x150?text=NEET+2026+Booster",
            "description": "An intensive pack with chapter-wise tests, detailed analysis, and NTA level questions for Physics, Chemistry, and Biology."
        },
        {
            "id": "jee202",
            "title": "JEE 2026: Chapter-wise Tests (PCM)",
            "instructor": "Experienced IITian Faculty",
            "duration": "Ongoing Access", // Handle this
            "imageUrl": "https://placehold.co/300x150?text=JEE+Chapter+Tests",
            "description": "Over 350+ tests covering Physics, Chemistry, and Mathematics chapter-wise, full syllabus, PYQs, and more."
        },
        {
            "id": "neet301",
            "title": "NEET Biology MasterClass 2025",
            "instructor": "Dr. Anika Sharma",
            "duration": "8 Weeks",
            "imageUrl": "https://placehold.co/300x150?text=NEET+Biology+Master",
            "description": "In-depth coverage of the NEET Biology syllabus with concept lectures, MCQs, and doubt clearing sessions."
        },
        {
            "id": "jee303",
            "title": "JEE Advanced 2025: Full Syllabus Revision",
            "instructor": "eVidhyalaya Senior Mentors",
            "duration": "6 Weeks Intensive",
            "imageUrl": "https://placehold.co/300x150?text=JEE+Adv+Revision",
            "description": "A fast-paced revision course covering the entire JEE Advanced syllabus with problem-solving strategies and mock tests."
        }
    ];

    const courseContainer = document.getElementById('courseContainer');
    const courseFilter = document.getElementById('courseFilter');
    const courseSort = document.getElementById('courseSort');
    const noResultsMessage = document.querySelector('.no-results');

    let displayedCourses = [...coursesData]; // Use 'coursesData' for the initial copy

    // Helper function to parse duration into a comparable number (e.g., total days)
    // This is crucial for accurate numeric sorting of durations like "8 Weeks", "12 Weeks", "Self-Paced"
    function parseDuration(durationStr) {
        durationStr = durationStr.toLowerCase();
        if (durationStr.includes("self-paced") || durationStr.includes("ongoing")) {
            return 99999; // Assign a very large number for self-paced/ongoing to put them at the end
        }

        const match = durationStr.match(/(\d+)\s*(week|month|day)s?/);
        if (match) {
            const value = parseInt(match[1]);
            const unit = match[2];
            switch (unit) {
                case 'day': return value;
                case 'week': return value * 7;
                case 'month': return value * 30; // Approximation
                default: return value;
            }
        }
        return 0; // Default for unparsable durations, might put them at the start
    }


    // Function to render courses
    function renderCourses(coursesToRender) {
        courseContainer.innerHTML = ''; // Clear existing cards
        if (coursesToRender.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
            coursesToRender.forEach(course => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="card-face card-front">
                        <h3 class="card-title-front">${course.title}</h3>
                    </div>
                    <div class="card-face card-back">
                        <img src="${course.imageUrl}" alt="${course.title}">
                        <div class="card-content-back">
                            <h4 class="card-title-back">${course.title}</h4>
                            <p class="card-instructor">Instructor: ${course.instructor}</p>
                            <p class="card-duration">Duration: ${course.duration}</p>
                            <p class="card-description">${course.description}</p>
                        </div>
                    </div>
                `;
                courseContainer.appendChild(card);
            });
        }
    }

    // Function to apply filter and sort
    function applyFilterAndSort() {
        const filterText = courseFilter.value.toLowerCase();
        const sortValue = courseSort.value; // Get the selected sort value

        let filtered = coursesData.filter(course => // Filter from original data each time
            course.title.toLowerCase().includes(filterText) ||
            course.instructor.toLowerCase().includes(filterText) ||
            course.description.toLowerCase().includes(filterText)
        );

        // Apply Sorting
        if (sortValue === 'title-asc') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === 'title-desc') {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortValue === 'duration-asc') {
            filtered.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
        } else if (sortValue === 'duration-desc') {
            filtered.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));
        }

        displayedCourses = filtered; // Update the courses to display
        renderCourses(displayedCourses);
    }

    // Event Listeners
    courseFilter.addEventListener('input', applyFilterAndSort);
    courseSort.addEventListener('change', applyFilterAndSort);

    // Initial render of all courses
    applyFilterAndSort(); // Call this to render initial state and apply any default sorting/filtering
});