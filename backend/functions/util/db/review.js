const { db } = require('../admin');

const reviewsName = "reviews";
const reviewsCollection = db.collection(reviewsName);

async function getReview(id) {
    const doc = await reviewsCollection.doc(id).get();
    if (!doc.exists) return nul;
    const review = doc.data();
    review.id = doc.id;
    return review;
}

async function getAllReviews() {
    const snapshot = await reviewsCollection.get();
    const reviews = [];
    snapshot.forEach((doc) => {
        const review = doc.data()
        review.id = doc.id;
        reviews.push(review);
    });
    return reviews;
}

async function getAllCourseReviews(courseId) {
    const snapshot = await reviewsCollection
        .where("courseId", "==", courseId)
        .get();
    
    if (snapshot.docs.length == 0) return null;

    const reviews = [];
    snapshot.forEach((doc) => {
        const review = doc.data()
        review.id = doc.id;
        reviews.push(review);
    });
    return reviews;
}

async function addReview(reviewDetails) {
    const { id } = await reviewsCollection.add(reviewDetails);
    return await getReview(id);
}

async function deleteReview(id) {
    const review = await getReview(id);
    await reviewsCollection.doc(id).delete();
    return review;
}

async function updateReview(id, updates) {
    await reviewsCollection.doc(id).update(updates);
    return await getReview(id);
}

module.exports = {
    reviewsName,
    reviewsCollection,
    getReview,
    getAllReviews,
    getAllCourseReviews,
    addReview,
    deleteReview,
    updateReview,
}