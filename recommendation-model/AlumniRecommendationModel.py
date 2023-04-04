
import pickle
import random
class AlumniRecommendationModel:
  def __init__(self, df_pkl, dataDict_pkl ,similarity_pkl):
    self.df = pickle.load(df_pkl)
    self.similarity = pickle.load(similarity_pkl)
    self.dataDict = pickle.load(dataDict_pkl)

  def getRandomProfiles(self):
    indexes = []
    profiles = []
    for x in range(0,12):
      index = random.randint(0,len(self.dataDict)-1)
      while index in indexes:
        index = random.randint(0,len(self.dataDict)-1)
      indexes.append(index)
      profiles.append(self.dataDict[index])
    return profiles

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
    index = self.df[self.df["_id"]==id].index[0]
    return self.recommendProfile(index)
  
  def searchProfilesByName(self, name):
    return self.df.query(f'fullName.str.contains("{name}",case=False)').to_json(orient='records')
  
# alumniRecommendationModel = AlumniRecommendationModel(open("df.pkl","rb"),open("dataDict.pkl","rb"),open("similarity.pkl","rb"))
# print(alumniRecommendationModel.getRandomProfiles())