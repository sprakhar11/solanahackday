import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopupIcon from "../components/PopupIcon";
import styles from "./Slide1694.module.css";

const Slide1694 = () => {
  const navigate = useNavigate();

  const onGroupLink2Click = useCallback(() => {
    navigate("/slide-169-2");
  }, [navigate]);

  return (
    <div className={styles.slide1694}>
      <div className={styles.homeDiv}>
        <div className={styles.logoDiv}>
          <div className={styles.rectangleDiv} />
          <Link className={styles.groupA} to="/slide-169-1">
            <div className={styles.deblisDiv}>Deblis</div>
            <img className={styles.vectorIcon} alt="" src="../vector8.svg" />
          </Link>
        </div>
        <button className={styles.frameButton}>
          <div className={styles.frameDiv}>
            <div className={styles.groupDiv}>
              <img
                className={styles.image2Icon}
                alt=""
                src="../image-2@2x.png"
              />
              <div className={styles.connectWalletDiv}>Connect Wallet</div>
            </div>
          </div>
        </button>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
        <div className={styles.causeDiv}>
          <img className={styles.vectorIcon1} alt="" src="../vector9.svg" />
          <div className={styles.groupDiv1}>
            <div className={styles.wereHereForACause}>
              We’re here for a cause
            </div>
            <button className={styles.ourStoryButton}>
              <Link className={styles.groupA1} to="/frame-6">
                <div className={styles.ourStoryDiv}>Our story</div>
                <img
                  className={styles.materialSymbolschevronRightIcon}
                  alt=""
                  src="../materialsymbolschevronrightrounded1.svg"
                />
              </Link>
            </button>
          </div>
        </div>
        <button className={styles.regularShoppingBasket}>
          <img
            className={styles.shoppingBasketRegularIcon}
            alt=""
            src="../shoppingbasketregular3.svg"
          />
        </button>
        <button className={styles.regularBell}>
          <img
            className={styles.bellRegularIcon}
            alt=""
            src="../bellregular3.svg"
          />
        </button>
        <div className={styles.suggestedForYou}>Suggested for you</div>
        <div className={styles.bestSellersDiv}>Best sellers</div>
        <div className={styles.viewMoreDiv}>View More</div>
        <div className={styles.viewMoreDiv1}>View More</div>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-41@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-51@2x.png" />
        </div>
        <a className={styles.groupA2} onClick={onGroupLink2Click}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-42@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-52@2x.png" />
        </a>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-43@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-53@2x.png" />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-44@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-54@2x.png" />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-45@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-55@2x.png" />
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-46@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-56@2x.png" />
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-47@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-57@2x.png" />
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-48@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-58@2x.png" />
        </div>
        <div className={styles.groupDiv10}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-49@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-59@2x.png" />
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-410@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-510@2x.png" />
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-411@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-511@2x.png" />
        </div>
        <div className={styles.frameDiv1} />
        <div className={styles.rectangleDiv25} />
        <div className={styles.madeWithByTeamKasukabeD}>
          {" "}
          made with ❤ by team kasukabe defence group ️
        </div>
        <div className={styles.subscribeToOurNewsletter}>
          Subscribe to our newsletter
        </div>
        <div className={styles.logoDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv13}>
            <div className={styles.deblisDiv}>Deblis</div>
            <img className={styles.vectorIcon} alt="" />
          </div>
        </div>
        <div className={styles.groupDiv14}>
          <input
            className={styles.groupInput}
            type="text"
            placeholder="Email Id"
          />
          <button className={styles.subscribeButton}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </button>
        </div>
        <div className={styles.subscribeToOurNewsletterAn}>
          Subscribe to our newsletter and get updates from round the workld
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.rectangleDiv27} />
          <div className={styles.rectangleDiv28} />
          <div className={styles.rectangleDiv29} />
          <div className={styles.shopFrom100ProductsForSp}>
            Shop from 100+ products for specially abled people
          </div>
          <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
          <button className={styles.shopNow}>
            <div className={styles.frameDiv2}>
              <div className={styles.subscribeDiv}>Shop now</div>
            </div>
          </button>
        </div>
        <PopupIcon />
        <div className={styles.cart3}>Cart ( 3 )</div>
        <div className={styles.emptyDiv}>Empty</div>
        <div className={styles.lineDiv} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-59@2x.png"
        />
        <div className={styles.magnaBlindStick}>Magna Blind stick</div>
        <div className={styles.div12}>- 2 +</div>
        <button className={styles.frameButton1}>
          <div className={styles.frameDiv3}>
            <div className={styles.groupDiv15}>
              <img
                className={styles.image2Icon1}
                alt=""
                src="../image-25@2x.png"
              />
              <div className={styles.checkoutDiv}>Checkout</div>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.groupDiv16}>
        <div className={styles.sOLDiv}>
          <span>{`1.3 `}</span>
          <span className={styles.sOLSpan}>SOL</span>
        </div>
        <img className={styles.image5Icon12} alt="" src="../image-531@2x.png" />
      </div>
    </div>
  );
};

export default Slide1694;
