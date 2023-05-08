import { Skeleton } from "antd";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, ind) => (
      <div className="outer_margin">
        <div className="card_skeleton" key={ind}>
          <Skeleton.Image
            active
            loading={true}
            className="skeleton_img"
            style={{
              width: "317px",
              height: "298px",
              marginRight: "1rem",
            }}
          ></Skeleton.Image>
          <div className="detail_skeleton">
            <div className="upper_skeleton">
              <Skeleton
                active
                loading={true}
                title={{ width: 100 }}
                paragraph={{
                  rows: 5,
                  width: [170, 280, 300, 220, 120],
                }}
              >
                <p>Data is here</p>
              </Skeleton>
            </div>
            <div className="lower_skeleton">
              <div>
                <Skeleton
                  active
                  loading={true}
                  title={false}
                  paragraph={{
                    rows: 1,
                    width: 111,
                  }}
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <p>Data is here</p>
                </Skeleton>
              </div>

              <Skeleton.Button
                active
                loading={true}
                className="skeleton_button"
                style={{
                  width: "133px",
                }}
              ></Skeleton.Button>
            </div>
          </div>
        </div>
      </div>
    ));
}

export default CardSkeleton;
