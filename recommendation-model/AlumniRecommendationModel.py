
import pickle
class AlumniRecommendationModel:
  def __init__(self, df_pkl, dataDict_pkl ,similarity_pkl):
    self.df = pickle.load(df_pkl)
    self.similarity = pickle.load(similarity_pkl)
    self.dataDict = pickle.load(dataDict_pkl)

  def recommendProfile(self, profileIndex):
    similarProfiles = list(enumerate(self.similarity[profileIndex]))
    sortedSimilarProfiles = sorted(similarProfiles,reverse=True,key = lambda x:x[1])
    top5SimilarProfiles = sortedSimilarProfiles[0:6]
    top5SimilarProfiles
    recommendation = []
    for i in top5SimilarProfiles:
      recommendation.append(self.dataDict[i[0]])
    return recommendation

  def recommendProfileById(self,id):
    index = self.df[self.df["_id"]=="63f1e38f0666421fed18d222"].index[0]
    return self.recommendProfile(index)