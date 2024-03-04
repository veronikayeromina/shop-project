import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <div>
      <div className="shop_card">
        <div className="card_content">
          <div className="card_product">
            <Skeleton className="card_image" />
          </div>

          <div className="card_text">
            <h4 className="card_title">
              <Skeleton className="card_title" />
            </h4>
            <div className="card_block">
              <p className="card_description">
                <Skeleton className="card_description" width={80} />
              </p>
              <Skeleton className="card_button" width={58} height={34} />
              <h5 className="card_info">
                <Skeleton className="card_info" />
              </h5>
            </div>

            <div className="card_box">
              <div className="card_box__text">
                <div className="card_count">
                  <Skeleton width={100} className="card_count" />
                </div>
                <div className="card_price">
                  <Skeleton width={20} className="card_price" />
                </div>
              </div>
              <Skeleton width={120} height={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
