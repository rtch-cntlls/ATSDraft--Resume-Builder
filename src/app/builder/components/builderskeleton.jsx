'use client';

export default function BuilderSkeleton() {
    return (
        <div className="min-vh-100 d-flex flex-column bg-light overflow-hidden">
            <div className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center shadow-sm flex-shrink-0" style={{ height: '57px' }}>
                <div className="d-flex align-items-center gap-2">
                    <div className="bg-secondary-subtle rounded animate-pulse" style={{ width: '36px', height: '30px' }}></div>
                    <div className="bg-secondary-subtle rounded animate-pulse" style={{ width: '120px', height: '20px' }}></div>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="bg-secondary-subtle rounded-pill animate-pulse" style={{ width: '150px', height: '32px' }}></div>
                    <div className="bg-primary-subtle rounded-pill animate-pulse" style={{ width: '130px', height: '32px' }}></div>
                </div>
            </div>

            <div className="container-fluid flex-grow-1 overflow-hidden p-0 position-relative">
                <div className="row g-0 h-100">
                    <div className="col-lg-6 d-flex bg-white border-end position-relative overflow-hidden" style={{ height: 'calc(100vh - 57px)' }}>
                        <div className="bg-light border-end p-3 d-none d-lg-flex flex-column gap-3" style={{ width: '240px' }}>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-secondary-subtle rounded-3 animate-pulse" style={{ height: '38px', width: '100%' }}></div>
                            ))}
                        </div>
                        <div className="flex-grow-1 p-4 d-flex flex-column gap-3">
                            <div className="bg-secondary-subtle rounded animate-pulse" style={{ width: '200px', height: '28px' }}></div>
                            <div className="bg-secondary-subtle rounded-3 animate-pulse" style={{ height: '120px', width: '100%' }}></div>
                            <div className="bg-secondary-subtle rounded-3 animate-pulse" style={{ height: '180px', width: '100%' }}></div>
                        </div>
                    </div>

                    <div className="col-lg-6 bg-secondary-subtle p-4 d-none d-lg-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 57px)' }}>
                        <div className="bg-white shadow-sm rounded-0 p-5 d-flex flex-column gap-4 animate-pulse" style={{ width: '794px', height: '923px' }}>
                            <div className="bg-secondary-subtle rounded w-50 mx-auto" style={{ height: '32px' }}></div>
                            <div className="bg-secondary-subtle rounded w-75 mx-auto" style={{ height: '16px' }}></div>
                            <div className="border-top pt-4 d-flex flex-column gap-3">
                                <div className="bg-secondary-subtle rounded w-25" style={{ height: '20px' }}></div>
                                <div className="bg-secondary-subtle rounded w-100" style={{ height: '60px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}