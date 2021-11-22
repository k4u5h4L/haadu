import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="page-404 section--full-bg" data-bg="img/bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-404__wrap">
                            <div className="page-404__content">
                                <h1 className="page-404__title">Oops!</h1>
                                <p className="page-404__text">
                                    This item is not found!
                                </p>
                                <a
                                    onClick={() => router.back()}
                                    style={{ cursor: "pointer" }}
                                    className="page-404__btn"
                                >
                                    go back
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
