import "./Timeline.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';

function timeline() {
    return (
        <Container>
            <h1>Experience</h1>
            <div class="timeline">
                <ul>
                    <li>
                        <a href="#">
                            <span>13 September 2023</span>
                            <h3>I served as a staff member for KMITL Tech Talk 2023</h3>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>16 December 2023</span>
                            <h3>I served as a staff member for Science KMITL OPEN HOUSE 2023</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/share/p/wg3bVNgqSxrtN8p7/" target="_blank">
                            <span>8 February 2024</span>
                            <h3>I served as a staff member Xcer-SCIENCE @KMITL</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/share/p/B3x824k3s2xfGeNN/" target="_blank">
                            <span>25 - 28, 30 April 2023</span>
                            <h3>I served as a Teaching Assistant (TA) for CSCamp 15</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/share/p/P7tmGza1fTisTq3t/" target="_blank">
                            <span> 23 - 28 April 2024</span>
                            <h3>I served as a Teaching Assistant (TA) for CSCamp 16</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/share/p/x5mSEgzak51cq2yQ/" target="_blank">
                            <span>24 - 27 July 2024</span>
                            <h3>I served as a Teaching Assistant (TA) for the Professional Developer Program 2024, Session 1</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/share/p/sPBoRhNkoqcqxL24/" target="_blank">
                            <span>7 - 10 August 2024</span>
                            <h3>I served as a Teaching Assistant (TA) for the Professional Developer Program 2024, Session 2</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    );
}
export default timeline;
