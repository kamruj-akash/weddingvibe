  // Set the date we're counting down to (Year, Month (0-11), Day, Hour, Minute, Second)
        // **আপনার লঞ্চের তারিখ এখানে সেট করুন:**
        // উদাহরণ: June 30, 2025, 10:00:00 AM.
        // বর্তমান সময় (May 29, 2025, 2:58:25 PM +06) অনুযায়ী, আপনাকে একটি ভবিষ্যতের তারিখ দিতে হবে।
        const launchDate = new Date("June 31, 2025 23:59:59").getTime(); // উদাহরণস্বরূপ, 2025 সালের শেষ দিন

        // Update the countdown every 1 second
        const x = setInterval(function () {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the launch date
            const distance = launchDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the elements with respective IDs
            document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days + "<span>Days</span>";
            document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours + "<span>Hours</span>";
            document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes +
                "<span>Minutes</span>";
            document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds +
                "<span>Second</span>";

            // If the countdown is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("days").innerHTML = "00<span>দিন</span>";
                document.getElementById("hours").innerHTML = "00<span>ঘণ্টা</span>";
                document.getElementById("minutes").innerHTML = "00<span>মিনিট</span>";
                document.getElementById("seconds").innerHTML = "00<span>সেকেন্ড</span>";
                document.querySelector('.countdown').innerHTML =
                    "<p>আমরা লাইভে আছি! অনুগ্রহ করে <a href='https://WeddingVibebywasi.com' style='color: var(--accent-color); text-decoration: none;'>এখানে ক্লিক করুন</a>।</p>";
                // Optionally, redirect to the main website
                // window.location.href = "https://WeddingVibebywasi.com";
            }
        }, 1000);